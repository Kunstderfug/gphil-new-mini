import { useUser } from '@/stores/useUser'
import { useStripe } from '@/stores/useStripe'

const user = useUser()
const stripe = useStripe()

export const useUserProfile = async () => {
  if (!user.user?.id) await user.getProfile()
  if (user.user?.email && user.user?.id) {
    await stripe.getCustomer(user.user?.email, user.user?.id).then(async () => {
      if (stripe.customerId) await stripe.getSubscription()
    })
  }
}

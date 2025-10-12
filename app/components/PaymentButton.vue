<template>
  <div class="flex w-full relative">
    <a v-if="session.currentScore?.paymentLink" target="_blank" rel="noopener noreferrer" :href="href">
      <Button :class="isMobile ? 'w-full' : ''" :bg="style.buttonColors.pink" md icon dark right rounded hint bold
        :text="`$${session.currentScore?.price}`">
        <ArcticonsMoneyManager :class="style.iconSize" />
      </Button>
    </a>
    <Hint />
    <HelpBubble v-if="style.showHint">
      <p>The price includes all future updates and improvements to this product</p>
    </HelpBubble>
  </div>
</template>
 
<script setup lang="ts">
import { useSession } from '@/stores/useSession'
import { useStyle } from '@/stores/useStyle'
import { isMobile } from '@/composables/useMobile';
import ArcticonsMoneyManager from '@/components/icons/ArcticonsMoneyManager.vue'


const session = useSession()
const style = useStyle()

defineProps<{
  href: string
}>()

</script>
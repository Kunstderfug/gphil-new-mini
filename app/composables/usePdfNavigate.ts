import { useStorage } from '@vueuse/core'

export const usePdfNavigate = () => {
  const scoreViewOpen = useStorage('scoreViewOpen', true)
  const scale = useStorage('scale', 1)
  const scaleStep = 0.1
  const scaleMax = 2
  const totalPages = ref(0)
  const doublePageView = useStorage('doublePageView', true)
  const pageIndex = ref(1)
  const nextPage = computed(() => {
    return pageIndex.value + (doublePageView.value ? 2 : 1)
  })

  function setBinding(e: KeyboardEvent) {
    const session = useSession()


    //if keybinding set to PDF navigate
    if (session.pdfNavigate) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        navigate(-1)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (pageIndex.value < totalPages.value && !(pageIndex.value + 1 === totalPages.value))
          navigate(1)
      }
    } else {
      if (e.key === ',') {
        e.preventDefault()
        navigate(-1)
      }
      if (e.key === '.') {
        e.preventDefault()
        if (pageIndex.value < totalPages.value)
          navigate(1)
      }

    }

    if (e.key === '/') {
      e.preventDefault()
      setDoublePageView()
    }

    //zoom in out
    if (e.key === '-') {
      e.preventDefault()
      setScaleMinus()
    }
    if (e.key === '=') {
      e.preventDefault()
      setScalePlus()
    }

    //toggle score view
    if (e.key === '0') {
      e.preventDefault()
      scoreViewOpen.value = !scoreViewOpen.value
    }
  }

  function navigate(val: number) {
    pageIndex.value += doublePageView.value ? val * 2 : val
    if (pageIndex.value < 1) pageIndex.value = 1
  }

  function setScalePlus() {
    scale.value = scale.value < scaleMax ? scale.value + scaleStep : scale.value
  }

  function setScaleMinus() {
    scale.value = scale.value > scaleStep ? scale.value - scaleStep : scale.value
  }

  const setTotalPages = (total: number) => totalPages.value = total

  const setDoublePageView = () => doublePageView.value = !doublePageView.value

  return {
    setBinding,
    navigate,
    setDoublePageView,
    setTotalPages,
    setScalePlus,
    setScaleMinus,
    scale,
    doublePageView,
    pageIndex,
    nextPage,
    totalPages,
    scoreViewOpen
  }
}

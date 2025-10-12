export const useKeybinding = async (e: KeyboardEvent) => {
  const session = useSession()
  const player = usePlayer()

  if (e.key === 'Enter' || e.key === 'PageDown') {
    e.preventDefault()
    session.sessionPaused ? session.startSession() : !player.avoidDoublePedalPress ? session.goToNextSection() : null
  }
  if (e.key === ' ' || e.key === 'PageUp') {
    e.preventDefault()
    session.sessionActive ? session.stopSession() : null
  }

  if (e.key === 'p') {
    e.preventDefault()
    session.sessionPaused ? session.startSession() : session.pauseSession()
  }
  if (!session.pdfNavigate) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      session.skipToPreviousSection()
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      session.skipToNextSection()
    }
  } else {
    if (e.key === ',') {
      e.preventDefault()
      session.skipToPreviousSection()
    }

    if (e.key === '.') {
      e.preventDefault()
      session.skipToNextSection()
    }
  }


  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (session.sessionActive && session.nextSectionTempoSet && session.nextSectionTempoIndex !== undefined) {
      session.setNextSectionTempo(1)
    } else {
      session.setNextTempo()
    }
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (session.sessionActive && session.nextSectionTempoSet && session.nextSectionTempoIndex > 0) {
      session.setNextSectionTempo(-1)
    } else {
      session.setPreviousTempo()
    }
  }

  if (e.key === 'Escape') {
    e.preventDefault()
    await navigateTo(`/library/${session.currentScore?.slug ?? session.currentScore?.slug}`)
    session.exitSession()
    reloadNuxtApp()
  }
}

import React, { useEffect, useRef, useState } from 'react'

import type { Sound } from '@/sounds'

import { useThemeStore } from '@/stores/theme-store'
import { useGlobalVolumeStore } from '@/stores/global-volume-store'
import { PomodoroStatus, usePomodoroStore } from '@/stores/pomodoro-store'
import { SoundState, useSoundsStateStore } from '@/stores/sounds-state-store'

import { VolumeController } from './volume-controller'
import { icon, soundButton } from './styles'

interface SoundButtonProps {
  sound: Sound
}

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)
  const pomodoroStatus = usePomodoroStore(state => state.pomodoroStatus)
  const theme = useThemeStore(set => set.theme)
  const soundsStore = useSoundsStateStore(state => state.sounds)
  const getSoundState = useSoundsStateStore(state => state.getSound)
  const setSoundState = useSoundsStateStore(state => state.setSound)

  const [localSoundState, setLocalSoundState] = useState<SoundState>({
    active: false,
    id: sound.id,
    volume: 1,
    loaded: false
  })

  const soundRef = useRef<HTMLAudioElement>()

  const sync = {
    active: (soundState: SoundState) => {
      if (soundState.active) soundRef.current.play()
      else soundRef.current.pause()
    },
    volume: (soundState: SoundState) => {
      soundRef.current.volume = soundState.volume * globalVolume
    }
  }

  useEffect(() => {
    const soundState = getSoundState(sound.id)

    let initialState = {
      id: sound.id,
      active: false,
      volume: 1,
      loaded: false
    }

    if (soundState) {
      initialState = {
        ...soundState,
        active: false,
        loaded: false
      }
    }

    setSoundState(initialState)
    setLocalSoundState(initialState)

    soundRef.current.load()
  }, [])

  useEffect(() => {
    const soundState = getSoundState(sound.id)

    if (!soundState || !localSoundState) return

    if (soundState.active !== localSoundState.active) sync.active(soundState)
    if (soundState.volume !== localSoundState.volume) sync.volume(soundState)

    setLocalSoundState(soundState)
  }, [soundsStore])

  useEffect(() => {
    if (!getSoundState(sound.id).active) return

    switch (pomodoroStatus) {
      case PomodoroStatus.ticking:
      case PomodoroStatus.idle:
        if (soundRef.current.volume === 0) {
          soundRef.current.volume =
            getSoundState(sound.id).volume * globalVolume
        }
        break

      case PomodoroStatus.stopped:
        if (soundRef.current.volume > 0) {
          soundRef.current.volume = 0
        }
        break
    }
  }, [pomodoroStatus])

  useEffect(() => {
    soundRef.current.volume = getSoundState(sound.id).volume * globalVolume
  }, [globalVolume])

  const Icon = sound.icon

  return (
    <div
      title={sound.title}
      className="flex h-24 w-24 flex-col items-center justify-center"
    >
      <audio
        ref={soundRef}
        onCanPlay={() => setSoundState({ ...localSoundState, loaded: true })}
        preload="auto"
        loop
      >
        <source src={sound.file.url} type={sound.file.type} />
      </audio>
      <button
        data-umami-event={sound.title}
        className={soundButton({
          active: localSoundState.active,
          isLoaded: localSoundState.loaded,
          theme
        })}
        onClick={() =>
          setSoundState({ ...localSoundState, active: !localSoundState.active })
        }
        disabled={!localSoundState.loaded}
        aria-label={sound.title}
      >
        <Icon className={icon()} />
      </button>
      <VolumeController
        isActive={localSoundState.active}
        soundName={sound.title}
        soundId={sound.id}
        handleSoundVolume={volume =>
          setSoundState({ ...localSoundState, volume })
        }
      />
    </div>
  )
}

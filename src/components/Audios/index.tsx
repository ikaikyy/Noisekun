import React from 'react'

import { Sound } from '../Sound'
import { VolumeController } from '../VolumeController'

import changeStateOfAudio from '../../functions/changeStateOfAudio'

import AudiosBlock from './styles'
export const Audios: React.FC = () => {
  return (
    <AudiosBlock>
      <Sound
        name="rain"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="storm"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="wind"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="water"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="ocean-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="small-waves"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="forest-ambience"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="leafs"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="fire"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="night"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="coffee"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="fan"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="train"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="air-plane"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
      <Sound
        name="underwater"
        changeStateOfAudio={changeStateOfAudio}
        VolumeController={VolumeController}
      />
    </AudiosBlock>
  )
}

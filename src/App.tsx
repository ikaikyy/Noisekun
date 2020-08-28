import React from 'react';

import environment from './services/defaultVariables';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Audios from './components/Audios';
import Sound from './components/Sound';
import Configurations from './components/Configurations';
import VolumeController from './components/VolumeController';
import Footer from './components/Footer';

import changeStateOfAudio from './functions/changeStateOfAudio';

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />

      <Header />
      <section className="main-section audio-section">
        <Audios
          Sound={Sound}
          VolumeController={VolumeController}
          changeStateOfAudio={changeStateOfAudio}
          env={environment}
        />
      </section>
      <Configurations />
      <Footer />
    </div>
  );
}

export default App;

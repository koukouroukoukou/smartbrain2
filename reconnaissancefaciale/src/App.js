import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Composants/Navigation/Navigation';
import Logo from './Composants/Logo/Logo';
import ImageLinkForm from './Composants/ImageLinkForm/ImageLinkForm';
// import FaceRecognition from './Composants/FaceRecognition/FaceRecognition';
import Rank from './Composants/Rank/Rank';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;

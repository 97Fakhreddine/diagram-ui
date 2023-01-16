import React, { Component, useState, useRef } from 'react';
import './App.css';
import DragAndDrop from './components/dragAndDrop/DragAndDrop';
import cloudPic from './assets/images/download.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imageSrc: null, displayThumbnail: cloudPic };
  }

  handleFileInput = (event) => {
    this.setState(
      { imageSrc: URL.createObjectURL(event.target.files[0]) },
      () => {
        console.log(this.state.imageSrc);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <DragAndDrop
          handleDrop={(file) => {
            this.setState({ displayThumbnail: URL.createObjectURL(file) });
          }}
        >
          <img
            src={this.state.displayThumbnail}
            style={{
              width: '384px',
              height: '216px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            }}
          />

          <span
            style={{
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              lineHeight: '1.3rem',
            }}
          >
            Drop image here
          </span>
        </DragAndDrop>
      </React.Fragment>
    );
  }
}

export default App;

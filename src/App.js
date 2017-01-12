import React, { Component } from 'react';
import logo from './logo.svg';
import Tooltip from './Tooltip';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Tooltip</h2>
        </div>

        <div>
          <Tooltip message="Tooltip on the left" position="left">
            <p>
              Lorem ipsum dolor sit amet, ut quod vitae oporteat vim, summo tempor ex vis. 
              Mea illum mollis signiferumque ut, constituto posidonium sit et. At aliquid argumentum sit, 
              vel ea scripta molestiae. Mel ne ipsum vitae, ullum possit neglegentur te sed, ius in eripuit 
              vocibus. Ad graeco labitur virtute vis.
            </p>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="Tooltip on the right" position="right">
            <p>
              Lorem ipsum dolor sit amet, ut quod vitae oporteat vim, summo tempor ex vis. 
              Mea illum mollis signiferumque ut, constituto posidonium sit et. At aliquid argumentum sit, 
              vel ea scripta molestiae. Mel ne ipsum vitae, ullum possit neglegentur te sed, ius in eripuit 
              vocibus. Ad graeco labitur virtute vis.
            </p>
          </Tooltip>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, ut quod vitae posidonium sit et. At aliquid argumentum sit, 
            vel ea scripta molestiae. Mel ne ipsum vitae, ullum possit neglegentur te sed, ius in eripuit 
            vocibus. Ad graeco labitur virtute vis. 
            <Tooltip message={<a href="http://www.google.com"> Click here! </a>} position="down">
              <b> link </b> 
            </Tooltip>
          </p>
        </div>

        <div>
            <Tooltip message="lel" position="down">
              <p>
                Lorem ipsum dolor sit amet, ut quod vitae posidonium sit et. At aliquid argumentum sit, 
                vel ea scripta molestiae. Mel ne ipsum vitae, ullum possit neglegentur te sed, ius in eripuit 
                vocibus. Ad graeco labitur virtute vis. 
              </p>
            </Tooltip>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, ut quod vitae posidonium sit et. At aliquid argumentum sit, 
            vel ea scripta molestiae. Mel ne ipsum vitae, ullum possit neglegentur te sed, ius in eripuit 
            vocibus. Ad graeco labitur virtute vis. 
          </p>
        </div>

      </div>
    );
  }
}

export default App;

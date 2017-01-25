import React, { Component } from 'react';
import logo from './logo.svg';
import Tooltip from './Tooltip';
import Slider from './Slider';
import './App.css';
import './tooltip.css';
import './slider.css';

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

        <div className='ExampleSliders'>
          <h4>Slider with custom options</h4>
          <pre>
          loop: true<br/>
          showArrows: true<br/>
          showNav: true<br/>
          selected: 0
          </pre>
          <Slider
            loop={ true }
            showArrows={ true }
            showNav={ true }
            selected={ 0 }>
            <div style={{ background: '#21BB9A' }}>A</div>
            <div style={{ background: '#329ADD' }}>B</div>
            <div style={{ background: '#9A5CB9' }}>C</div>
            <div style={{ background: '#E64C3C' }}>D</div>
            <div style={{ background: '#2D3F52' }}>E</div>
          </Slider>
        </div>

      </div>
    );
  }
}

export default App;

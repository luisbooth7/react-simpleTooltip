import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Tooltip extends Component {
  
  constructor() {
    super();

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.overflowCheck = this.overflowCheck.bind(this);

    this.state = {
      visibility: 'tooltip-hide',
      position: '',
      arrow: '',
      fadein: ''
    };
  }

  show(event) {
    event.preventDefault();
    this.setState({position: 'tooltip-' + this.props.position});
    this.setState({arrow: 'arrow-'  + this.props.position});
    this.setState({visibility: 'tooltip-show'});
  }

  hide() {
    this.setState({visibility: 'tooltip-hide'});
  }

  overflowCheck() {
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let domNode = ReactDOM.findDOMNode(this.refs.tooltip);
    let topBoundary = domNode.getBoundingClientRect().top;
    let bottomBoundary = (domNode.getBoundingClientRect().top + domNode.getBoundingClientRect().height);
    let leftBoundary = domNode.getBoundingClientRect().left;
    let rightBoundary = (domNode.getBoundingClientRect().left + domNode.getBoundingClientRect().width);

    if (this.state.visibility === 'tooltip-hide') 
      return

    if (leftBoundary < 0) {
      this.setState({position: 'tooltip-right'});
      this.setState({arrow: 'arrow-right'});
    }
    if (rightBoundary > width && this.state.position === 'tooltip-right') {
      this.setState({position: 'tooltip-up'});
      this.setState({arrow: 'arrow-up'});
    }
    if (rightBoundary > width) {
      this.setState({position: 'tooltip-left'});
      this.setState({arrow: 'arrow-left'});
    }
    if (leftBoundary < 0 && this.state.position === 'tooltip-left') {
      this.setState({position: 'tooltip-up'});
      this.setState({arrow: 'arrow-up'});
    }

    if (topBoundary < 0) {
      this.setState({position: 'tooltip-down'});
      this.setState({arrow: 'arrow-down'});
    }
    if (bottomBoundary > height) {
      this.setState({position: 'tooltip-up'});
      this.setState({arrow: 'arrow-up'});
    }
  }

  componentDidUpdate() {
    this.overflowCheck();
  }

  render() {
  	return(
    <span className="tooltip-wrapper" onClick={(event)=>this.show(event)} onMouseLeave={this.hide}>
      {this.props.children}
      <span className={this.state.visibility + " tooltip-fadein " + this.state.position + " " + this.state.fadein} ref="tooltip"> {this.props.message} 
        <span className={this.state.arrow +" tooltip-fadein-" + this.state.arrow}></span>
      </span>
    </span>
  	);
  }
}

export default Tooltip;


/* onMouseLeave={()=>{setTimeout(this.hide.bind(this), 200);} */
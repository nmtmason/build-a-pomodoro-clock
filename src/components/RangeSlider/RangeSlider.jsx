import React, { Component } from 'react';
import PropTypes from 'prop-types';

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const KEYS = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36
});

export class RangeSlider extends Component {
  state = {
    value: this.props.min,
    offset: 0
  };

  trackRef = React.createRef();
  sliderRef = React.createRef();

  componentDidMount() {
    this.trackRef.current.addEventListener('click', this.handleClick);
    this.sliderRef.current.addEventListener('mousedown', this.handleMouseDown);
    this.sliderRef.current.addEventListener('keydown', this.handleKeyDown);
  }

  getTrackProperties = () => {
    return this.trackRef.current.getBoundingClientRect();
  };

  getSliderProperties = () => {
    return this.sliderRef.current.getBoundingClientRect();
  };

  slideToPosition = x => {
    let { x: trackX, width: trackWidth } = this.getTrackProperties();

    let range = this.props.max - this.props.min;
    let difference = x - trackX;
    let value = Math.round((range * difference) / trackWidth);

    this.slideToValue(value);
  };

  slideToValue = value => {
    let { width: trackWidth } = this.getTrackProperties();
    let { width: sliderWidth } = this.getSliderProperties();
    let range = this.props.max - this.props.min;
    let offset = (value * trackWidth) / range - sliderWidth / 2;

    this.setState(state => ({
      ...state,
      value: clamp(value, this.props.min, this.props.max),
      offset: clamp(offset, 0, trackWidth - sliderWidth)
    }));
  };

  handleMouseDown = event => {
    event.preventDefault();

    this.sliderRef.current.ownerDocument.addEventListener(
      'mouseup',
      this.handleMouseUp
    );
    this.sliderRef.current.ownerDocument.addEventListener(
      'mousemove',
      this.handleMouseMove
    );
    this.sliderRef.current.focus();
  };

  handleMouseUp = event => {
    this.trackRef.current.ownerDocument.removeEventListener(
      'mouseup',
      this.handleMouseUp
    );
    this.trackRef.current.ownerDocument.removeEventListener(
      'mousemove',
      this.handleMouseMove
    );
  };

  handleMouseMove = event => {
    this.slideToPosition(event.clientX);
  };

  handleClick = event => {
    event.preventDefault();

    this.slideToPosition(event.clientX);
    this.sliderRef.current.focus();
  };

  handleKeyDown = event => {
    event.preventDefault();

    switch (event.keyCode) {
      case KEYS.RIGHT:
      case KEYS.UP:
        this.slide(this.state.value + 1);
        break;
      case KEYS.LEFT:
      case KEYS.DOWN:
        this.slide(this.state.value - 1);
        break;
      case KEYS.PAGEUP:
        this.slide(this.state.value + 2);
        break;
      case KEYS.PAGEDOWN:
        this.slide(this.state.value - 2);
        break;
      case KEYS.HOME:
        this.slide(this.props.min);
        break;
      case KEYS.END:
        this.slide(this.props.max);
        break;
      default:
        break;
    }
  };

  render() {
    return this.props.children(
      this.trackRef,
      this.sliderRef,
      this.state.value,
      this.state.offset
    );
  }
}

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100
};

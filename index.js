import React from 'react';
import nouislider from 'nouislider-algolia-fork';

class Nouislider extends React.Component {
  componentDidMount() {
    this.createSlider();
  }

  componentDidUpdate() {
    this.slider.destroy();
    this.createSlider();
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  createSlider() {
    var slider = this.slider = nouislider.create(this.sliderContainer, {...this.props});

    if (this.props.onUpdate) {
      slider.on('update', this.props.onUpdate);
    }

    if (this.props.onChange) {
      slider.on('change', this.props.onChange);
    }

    if (this.props.onSlide) {
      slider.on('slide', this.props.onSlide);
    }
  }

  render() {
    return <div ref={slider => {this.sliderContainer = slider;}} />;
  }
}

Nouislider.propTypes = {
  // http://refreshless.com/nouislider/slider-options/#section-animate
  animate: React.PropTypes.bool,
  // http://refreshless.com/nouislider/slider-options/#section-Connect
  connect: React.PropTypes.oneOfType([
    React.PropTypes.oneOf(['lower', 'upper']),
    React.PropTypes.bool
  ]),
  // http://refreshless.com/nouislider/slider-options/#section-cssPrefix
  cssPrefix: React.PropTypes.string,
  // http://refreshless.com/nouislider/slider-options/#section-orientation
  direction: React.PropTypes.oneOf(['ltr', 'rtl']),
  // http://refreshless.com/nouislider/slider-options/#section-limit
  limit: React.PropTypes.number,
  // http://refreshless.com/nouislider/slider-options/#section-margin
  margin: React.PropTypes.number,
  // http://refreshless.com/nouislider/events-callbacks/#section-change
  onChange: React.PropTypes.func,
  // http://refreshless.com/nouislider/events-callbacks/#section-update
  onSlide: React.PropTypes.func,
  // http://refreshless.com/nouislider/events-callbacks/#section-slide
  onUpdate: React.PropTypes.func,
  // http://refreshless.com/nouislider/slider-options/#section-orientation
  orientation: React.PropTypes.oneOf(['horizontal', 'vertical']),
  // http://refreshless.com/nouislider/pips/
  pips: React.PropTypes.object,
  // http://refreshless.com/nouislider/slider-values/#section-range
  range: React.PropTypes.object.isRequired,
  // http://refreshless.com/nouislider/slider-options/#section-start
  start: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  // http://refreshless.com/nouislider/slider-options/#section-step
  step: React.PropTypes.number,
  // http://refreshless.com/nouislider/slider-options/#section-tooltips
  tooltips: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ])
};

module.exports = Nouislider;

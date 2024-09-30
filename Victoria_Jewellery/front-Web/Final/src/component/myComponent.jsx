import React, { useEffect } from 'react';
import WOW from 'wowjs';
import $ from 'jquery';

import Slider from './slider';

import 'owl.carousel';

const MyComponent = () => {
  useEffect(() => {
    // Ensure jQuery is available globally
    window.jQuery = $;

    // Initialize Owl Carousel
    const initializeCarousel = () => {
      $('.slider_area').owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
        loop: true,
        nav: false,
        autoplayTimeout: 6000,
        items: 1,
        dots: true,
      });
    };

    // Initialize the carousel after the component mounts
    initializeCarousel();

    // Cleanup function
    return () => {
      $('.slider_area').trigger('destroy.owl.carousel'); // Clean up the carousel
    };
  }, []);

  return (
    <div className="slider_area owl-carousel">
      <Slider />
    </div>
  );
};

export default MyComponent;

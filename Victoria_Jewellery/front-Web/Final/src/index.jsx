import React, { useEffect } from 'react';
import WOW from 'wowjs';
import $ from 'jquery';
import 'owl.carousel';
import 'slick-carousel';

const MyComponent = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();

    // Function to handle background images
    const dataBackgroundImage = () => {
      $('[data-bgimg]').each(function () {
        const bgImgUrl = $(this).data('bgimg');
        $(this).css({
          'background-image': `url(${bgImgUrl})`,
        });
      });
    };

    // Event listeners for cart
    $('.cart_link > a').on('click', () => {
      $('.mini_cart').addClass('active');
    });

    $('.mini_cart_close > a').on('click', () => {
      $('.mini_cart').removeClass('active');
    });

    // Sticky navbar
    const handleScroll = () => {
      const scroll = $(window).scrollTop();
      if (scroll < 100) {
        $('.sticky-header').removeClass('sticky');
      } else {
        $('.sticky-header').addClass('sticky');
      }
    };

    $(window).on('scroll', handleScroll);

    // Load event
    $(window).on('load', dataBackgroundImage);

    // Initialize carousels
    $('.slider_area').owlCarousel({
      animateOut: 'fadeOut',
      autoplay: true,
      loop: true,
      nav: false,
      autoplayTimeout: 6000,
      items: 1,
      dots: true,
    });

    $('.product_column3').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 5,
      arrows: true,
      rows: 2,
      prevArrow:
        '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
      nextArrow:
        '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    });

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize blog section carousel
    $('.blog_column3').owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplayTimeout: 5000,
      items: 3,
      dots: false,
      margin: 30,
      navText: [
        '<i class="ion-chevron-left"></i>',
        '<i class="ion-chevron-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });

    // Cleanup event listeners on unmount
    return () => {
      $(window).off('scroll', handleScroll);
      $('.cart_link > a').off('click');
      $('.mini_cart_close > a').off('click');
    };
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
      <div className="cart_link">
        <a href="#">Cart</a>
      </div>
      <div className="mini_cart">
        <div className="mini_cart_close">
          <a href="#">Close</a>
        </div>
      </div>
      <div className="sticky-header">Sticky Header</div>
      <div className="slider_area">Slider Area</div>
      <div className="product_column3">Product Column 3</div>
      <div className="blog_column3">Blog Column 3</div>
      {/* Add more JSX as needed */}
    </div>
  );
};

export default MyComponent;

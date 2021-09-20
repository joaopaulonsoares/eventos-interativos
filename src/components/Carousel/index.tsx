/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
    children: Array<ReactNode>;
}

export function CarouselComponent({ children }: CarouselProps) {
  const responsive = {
    largedesktop: {
      breakpoint: { max: 3840, min: 2160 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      ssr // means to render carousel on server-side.
      infinite={false}
      arrows
      autoPlay={false}
      centerMode={false}
      className=""
      containerClass="carousel-container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside
      renderDotsOutside={false}
      responsive={responsive}
      showDots
      sliderClass=""
      removeArrowOnDeviceType={['mobile']}
      swipeable
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}

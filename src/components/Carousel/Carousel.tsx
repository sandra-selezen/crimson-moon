"use client";

import { ReactNode } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Carousel.module.scss";

interface ICarousel {
  children: ReactNode[];
  settings?: Settings;
  className?: string;
}

export const Carousel = ({ children, settings, className }: ICarousel) => {
  return (
    <Slider
      {...{
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <ButtonNext />,
        prevArrow: <ButtonBack />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        ...settings,
      }}
      className={style.slider}
    >
      {children}
    </Slider>
  );
};


const ButtonNext = (props: CustomArrowProps) => {
  const { onClick } = props;

  return (
    <button type="button" className={`${style.arrow} ${style.next}`} onClick={onClick}>
      <RiArrowRightSLine size={"2rem"} />
    </button>
  )
};

const ButtonBack = (props: CustomArrowProps) => {
  const { onClick } = props;

  return (
    <button type="button" className={`${style.arrow} ${style.back}`} onClick={onClick}>
      <RiArrowLeftSLine size={"2rem"} />
    </button>
  )
};

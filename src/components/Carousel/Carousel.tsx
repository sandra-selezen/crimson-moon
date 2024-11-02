"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Carousel.module.scss";

export const Carousel = ({ items }: { items: any }) => {
  const settings = {
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
    ]
  };

  return (
    <div className={style["slider-container"]}>
      <Slider {...settings}>
        {items.map((item: any) => (
          <div key={item.rank} className={style.item}>
            <div className={style.imageWrapper}>
              <img src={item.book_image} alt={item.title} width={100} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.author} | {item.publisher}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const ButtonNext = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <button type="button" className={style["next-slick-arrow"]} onClick={onClick}>{">"}</button>
  )
};

const ButtonBack = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <button type="button" className={style["prev-slick-arrow"]} onClick={onClick}>{"<"}</button>
  )
};
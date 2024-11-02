"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

export const Carousel = ({ items }: { items: any }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
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
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {items.map((item: any) => (
          <div key={item.rank} className={styles.item}>
            <img src={item.book_image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>{item.author} | {item.publisher}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

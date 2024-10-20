"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ items }: { items: any }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item: any) => (
          <article key={item.rank}>
            <img src={item.book_image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>{item.author} | {item.publisher}</p>
          </article>
        ))}
      </Slider>
    </div>
  )
}

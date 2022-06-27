import React from 'react';
import Slider from "react-slick";
import Card from "./Card";

function BottomSlider({ ratedMovies, onClickInfo, height }) {
  let settings = {
    speed: 500,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0
  };

  return (
    <>
      <Slider {...settings} className="container">
        {ratedMovies ? ratedMovies.map(obj => (
          <Card
            height={height}
            key={obj.id}
            id={obj.id}
            img={obj.poster_path}
            rate={obj.vote_average}
            title={obj.title}
            date={obj.release_date}
            text={obj.overview}
            onHandleClick={(obj) => onClickInfo(obj)}
          />
        )) : ''}
      </Slider>
    </>
  );
}

export default BottomSlider;

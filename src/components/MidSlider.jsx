import React from 'react';
import Slider from "react-slick";
import Card from "./Card";

function MidSlider({popularMovies, onClickInfo}) {
  let settings = {
    speed: 500,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0
  };

  return (
    <>
      <Slider {...settings} className="container">
        {popularMovies ? popularMovies.map(obj => (
          <Card
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

export default MidSlider;
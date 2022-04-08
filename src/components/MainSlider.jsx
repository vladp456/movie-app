import React from 'react';
import Slider from "react-slick";

function MainSlider({newMovies}) {
  let settings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings} className="container">
        {newMovies ? newMovies.map(obj => (
          <div className="slide" key={obj.id}>
            <img src={'https://image.tmdb.org/t/p/w1280' + obj.backdrop_path + '?api_key=ecb7750b8506fa9db126c8d29b0ecf22'}
                 alt="slider image"
                 className="slider-img"
            />

            <div className="slide-info">
              <p className="slide-title">{obj.title}</p>
              <p className="slide-text">{obj.overview}</p>

              <div className="rate">
                <img src="img/star.png" alt="star"/>
                <p>{obj.vote_average}</p>
              </div>

              <button>Watch now</button>
            </div>
          </div>
        )) : ''}
      </Slider>
    </>
  );
}

export default MainSlider;
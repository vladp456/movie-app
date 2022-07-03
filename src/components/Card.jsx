import React from 'react';
import notFound from '../assets/img/error-img.jpg';

function Card({ id, img, rate, title, date, text, onHandleClick, height, className }) {
  const obj = { id, img, title, date, text };

  const handleClick = () => {
    onHandleClick(obj);
  }

  return (
    <div className={`${height ? "big-slider__elem" : "small-slider__elem"} ${className}`}>
      <img
        src={'https://image.tmdb.org/t/p/w1280' + img + '?api_key=ecb7750b8506fa9db126c8d29b0ecf22'}
        onError={(e) => e.target.src = notFound}
        alt="slider"
        className="slider-elem__img"
        onClick={handleClick}
      />

      <div className="short-info">
        <div className="rate">
          <img src="img/star.png" alt="star" />
          <p>{rate}</p>
        </div>

        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;

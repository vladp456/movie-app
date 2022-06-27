import React from 'react';
import Card from "../components/Card";

function Popular({ popularMovies, onClickInfo }) {
  return (
    <div className="container">
      <p className="rated-header">Popular movies</p>

      <div className="rated-body">
        {popularMovies ? popularMovies.map(obj => (
          <Card
            key={obj.id}
            img={obj.poster_path}
            rate={obj.vote_average}
            title={obj.title}
            date={obj.release_date}
            text={obj.overview}
            onHandleClick={(obj) => onClickInfo(obj)}
            className={'rated-body__elem'}
          />
        )) : ''}
      </div>
    </div>
  );
}

export default Popular;

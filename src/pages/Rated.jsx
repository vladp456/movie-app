import React from 'react';
import Card from "../components/Card";

function Rated({ratedMovies, onClickInfo}) {
  return (
    <div className="container">
      <p className="rated-header">High Rated Movies</p>

      <div className="rated-body">
        {ratedMovies ? ratedMovies.map(obj => (
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

export default Rated;
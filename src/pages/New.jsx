import React from 'react';
import Card from "../components/Card";

function New({ newMovies, onClickInfo }) {
  return (
    <div className="container">
      <p className="rated-header">New movies</p>

      <div className="rated-body">
        {newMovies ? newMovies.map(obj => (
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

export default New;

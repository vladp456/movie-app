import React from 'react';
import MainSlider from "../components/MainSlider";
import MidSlider from "../components/MidSlider";
import BottomSlider from "../components/BottomSlider";
import {Link} from "react-router-dom";

function Home({newMovies, popularMovies, onClickInfo, ratedMovies, height}) {
  return (
    <>
      <MainSlider newMovies={newMovies}/>

      <Link to="/popular">
        <p className="main-header container">Most popular movies &#8250;</p>
      </Link>
      <MidSlider
        popularMovies={popularMovies}
        onClickInfo={onClickInfo}
      />

      <Link to="/rated">
        <p className="main-header container">Highest rated movies &#8250;</p>
      </Link>
      <BottomSlider
        ratedMovies={ratedMovies}
        onClickInfo={onClickInfo}
        height={height}
      />
    </>
  );
}

export default Home;
import React, {useEffect, useState} from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "./components/MainSlider";
import MidSlider from "./components/MidSlider";
import BottomSlider from "./components/BottomSlider";
import Drawer from "./components/Drawer";

function App() {
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [info, setInfo] = useState({});
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [height] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const newMoviesRes = await axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=ecb7750b8506fa9db126c8d29b0ecf22');
        setNewMovies(newMoviesRes.data.results);

        const popularMoviesRes = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ecb7750b8506fa9db126c8d29b0ecf22');
        setPopularMovies(popularMoviesRes.data.results);

        const ratedMoviesRes = await axios.get('https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=ecb7750b8506fa9db126c8d29b0ecf22');
        setRatedMovies(ratedMoviesRes.data.results);
      }
      catch (e) {
        alert('Error while requesting data');
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const onClickInfo = (obj) => {
    setInfo(obj);
    setDrawerOpened(true);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="menu">
          <a href="#"><img src="img/logo-icon.png" alt="logo icon"/></a>
          <a href="#"><img src="img/most-popular-icon.png" alt="most popular icon"/></a>
          <a href="#"><img src="img/just-released-icon.png" alt="just released icon"/></a>
          <a href="#"><img src="img/top-rated-icon.png" alt="top rated icon"/></a>
        </div>

        <div className="profile">
          <a href=""><img src="img/account-icon.png" className="profile-item" alt="account icon"/></a>
          <a href=""><img src="img/settings-icon.png" alt="settings icon"/></a>
        </div>
      </div>

      <MainSlider newMovies={newMovies}/>

      <p className="main-header container">Most popular movies &#8250;</p>
      <MidSlider
        popularMovies={popularMovies}
        onClickInfo={onClickInfo}
      />

      <p className="main-header container">Highest rated movies &#8250;</p>
      <BottomSlider
        ratedMovies={ratedMovies}
        onClickInfo={onClickInfo}
        height={height}
      />

      <Drawer
        info={info}
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      />
    </div>
  );
}

export default App;

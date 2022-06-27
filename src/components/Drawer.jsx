import React from 'react';

function Drawer({ info, opened, onClose }) {
  return (
    <div className={`${"drawer"} ${opened ? "drawerVisible" : "drawer"}`}>
      <img
        className="drawer-close"
        src="img/close.svg"
        alt="close icon"
        onClick={onClose}
      />

      <img
        className="drawer-img"
        src={'https://image.tmdb.org/t/p/w1280' + info.img + '?api_key=ecb7750b8506fa9db126c8d29b0ecf22'}
        alt="movie image"
      />

      <div className='drawer-info'>
        <p className="drawer-header">{info.title} ({info.date})</p>
        <p className="drawer-text">{info.text}</p>
        <button className="drawer-btn">Watch now</button>
      </div>
    </div>
  );
}

export default Drawer;

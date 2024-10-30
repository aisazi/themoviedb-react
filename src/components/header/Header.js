import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="absolute">
          <nav>
            <ul className="header-list">
              <li className="logo">
                <Link to="/">
                  <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
                </Link>
              </li>
              <li className="movies">
                Movies
                <ul className="popular">
                  <li className="child">
                    <Link to="/popular">Popular</Link>
                  </li>
                  <li>
                    <Link to="/now-playing">Now Playing</Link>
                  </li>
                  <li>
                    <Link to="/upcoming">Upcoming</Link>
                  </li>
                  <li>
                    <Link to="/top-rated">Top Rated</Link>
                  </li>
                </ul>
              </li>
              <li className="tv-shows">
                Tv Shows
                <ul className="shows">
                  <li className="child-shows">Popular</li>
                  <li>Airing Today</li>
                  <li>On Tv</li>
                  <li>Top Rated</li>
                </ul>
              </li>
              <li className="people">
                People
                <ul className="people-popular">
                  <li className="child-popular">Popular People</li>
                </ul>
              </li>
              <li className="parent-more">
                More
                <ul className="more">
                  <li className="child-more">Discussion</li>
                  <li>Leaderboard</li>
                  <li>Top Rated</li>
                  <li>API</li>
                </ul>
              </li>
            </ul>
            <div className="division">
              <div className="icons">
                <div className="plus">
                  <img
                    src="https://img.icons8.com/?size=100&id=62888&format=png&color=ffffff"
                    height="20px"
                  />
                </div>
                <div className="language">
                  <h5>EN</h5>
                </div>
                <div className="bell">
                  <img
                    src="https://img.icons8.com/?size=100&id=82857&format=png&color=ffffff"
                    height="20px"
                  />
                </div>

                {/* <div className="picture-profile"> */}
                <div className="profile"></div>
                {/* </div> */}

                <div className="search">
                  <img
                    src="https://img.icons8.com/?size=100&id=7695&format=png&color=ffffff"
                    height="22px"
                  ></img>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

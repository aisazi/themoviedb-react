import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="inside-banner">
          <h1>Welcome.</h1>
          <h2>
            Millions of movies, TV shows and people to discover.Explore now.
          </h2>
          <form>
            <label>
              <input
                className="searchInput"
                type="text"
                placeholder="Search for a movie,tv show,person....."
              />
            </label>
            <input className="searchInput2" type="submit" value="Search" />
          </form>
        </div>
      </div>
      {/* <div className="d"></div> */}
    </div>
  );
}

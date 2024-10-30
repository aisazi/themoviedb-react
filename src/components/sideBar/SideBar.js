import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div>
      <div>
        <div className="sort">
          <div className="dropp">
            <div>
              <h5>Sort</h5>
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=79025&format=png&color=000000"
                height="12px"
              ></img>
            </div>
          </div>
          <div>
            <div className="line"></div>
          </div>
          <div className="sort-result">
            <div className="move">
              <h4>Sort Result By</h4>
            </div>
            <div className="descending">
              <div className="popularity">
                <div>
                  <h4>Popularity Descending</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/?size=100&id=99977&format=png&color=000000"
                    height="12px"
                  />
                </div>
              </div>
            </div>
            <div>
              <ul className="olay">
                <li>Popularity Descending</li>
                <li>Popularity Ascending</li>
                <li>Rating Descending</li>
                <li>Rating Ascending</li>
                <li>Realese Date Descending</li>
                <li>Realese Date Ascending</li>
                <li>Title (A-Z)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="where">
          <div className="watch">
            <div>
              <h4>Where to Watch</h4>
            </div>
            <div className="country-sum"></div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=79025&format=png&color=000000"
                height="12px"
              ></img>
            </div>
          </div>
          <div>
            <div className="line2"></div>
          </div>
          <form className="format">
            <div className="flex">
              <label>My Service</label>
              <div>
                <img
                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-151-square-edit-4384537ef9438440b7090264a6ced5d2013aede66315aec4dbf9a53a5cb4c146.svg"
                  height="20px"
                ></img>
              </div>
            </div>
            <div className="flex2">
              <input type="checkbox" />
              <h5>
                Restrict searches to my
                <br /> subscribed services?
              </h5>
            </div>
            <div className="line3"></div>
            <label className="label-word">Country</label>
            <div className="country">
              <div>
                <img
                  src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
                  height="25px"
                ></img>
              </div>
              <div className="usa">
                <div>United States</div>
              </div>
              <div className="surot">
                <img
                  src="https://img.icons8.com/?size=100&id=99977&format=png&color=000000"
                  height="13px"
                ></img>
              </div>
            </div>
            <div className="input-card">
              <input type="text" />

              <li>
                <img
                  src="https://img.icons8.com/?size=100&id=w0bwtq9kIv2K&format=png&color=000000"
                  height="25px"
                ></img>
                <h5>Albania</h5>
              </li>

              <li>
                <img
                  src="https://img.icons8.com/?size=100&id=22434&format=png&color=000000"
                  height="25px"
                ></img>
                <h5>Algeria</h5>
              </li>
            </div>
          </form>

          <div className="small-cards">
            <div className="small-cards-children">
              <img src="https://img.icons8.com/?size=100&id=o7YMV0TFYOgR&format=png&color=000000"></img>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="filter-child">
            <div>
              <h5>Filters</h5>
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=79025&format=png&color=000000"
                height="14px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

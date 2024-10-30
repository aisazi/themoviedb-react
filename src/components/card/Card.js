import React from "react";
import "./Card.css";

export default function Card(props) {
  const { id, title, backdrop_path } = props.item;
  console.log(props.item);
  return (
    // <div className="cardMovie">
    //   <img
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAz6Jb6Kuo25tbCT6ihhrJYzmdIM4L887PbA&s"
    //     alt="Avatar"
    //   />
    //   <div className="container">
    //     <h4>
    //       <b>John Doe</b>
    //     </h4>
    //     <p>Architect & Engineer</p>
    //   </div>
    // </div>
    <div>
      <div className="card-movies">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEDdHDcc5Gp-NynCXOUI4hai4oxDdlE2dag&s" />
        <div className="">
          <h4>Titanic</h4>
          <h5>18-09-1993</h5>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import { apiReq } from "../util";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [dates, setDates] = useState("This Month");

  // function apiReq() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdhYWVjMzg4ODkwZDMyMGY1OTAxMWQ1NmRhZWI3YiIsIm5iZiI6MTcyOTg4MzkzNC44OTYyNzYsInN1YiI6IjY3MWJlZGJjMjdiZDU3ZDkxZjYyYTIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wUsiSGrXhc73bKcHBPCwbIRhDOZZNa8makN5lRn2y10",
  //     },
  //   };
  //   const myData =
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  //   // const serachUrl =
  //   //   "https://api.themoviedb.org/3/search/movie?query=titanic&include_adult=false&language=en-US&page=1";
  //   fetch(myData, options)
  //     .then((res) => res.json())
  //     .then((res) => setMovieData(res.results))
  //     .catch((err) => console.error(err));
  // }

  // function apiReq() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdhYWVjMzg4ODkwZDMyMGY1OTAxMWQ1NmRhZWI3YiIsIm5iZiI6MTcyOTg4MzkzNC44OTYyNzYsInN1YiI6IjY3MWJlZGJjMjdiZDU3ZDkxZjYyYTIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wUsiSGrXhc73bKcHBPCwbIRhDOZZNa8makN5lRn2y10",
  //     },
  //   };
  //   const myData =
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  //   fetch(myData, options)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const filtering = res.results.filter((item) => {
  //         console.log(item.release_date);
  //       });
  //     })
  //     .catch((err) => console.error(err));
  // }

  ////

  const dataGetter = async () => {
    const data = await apiReq();
    setMovieData(data.results);
  };

  useEffect(() => {
    dataGetter();
  }, []);

  return (
    <div className="container">
      <Banner />
      <div className="selectMovieDate">
        <button>This Month</button>
        <button>This Year</button>
      </div>
      <div className="scroll-x">
        {movieData.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;

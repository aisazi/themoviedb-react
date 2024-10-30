export async function apiReq() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdhYWVjMzg4ODkwZDMyMGY1OTAxMWQ1NmRhZWI3YiIsIm5iZiI6MTcyOTg4MzkzNC44OTYyNzYsInN1YiI6IjY3MWJlZGJjMjdiZDU3ZDkxZjYyYTIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wUsiSGrXhc73bKcHBPCwbIRhDOZZNa8makN5lRn2y10",
    },
  };
  const myData =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  return await fetch(myData, options)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));
}

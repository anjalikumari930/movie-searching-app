import React, { useState, useEffect } from "react";
import Moviecard from "./moviecard";

const Home = () => {
  const [Movie, setMovie] = useState([]);
  const [Search, setSearch] = useState("");
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=cfaa0483";
  const fetchmovie = async (title) => {
    const response = await fetch(`${apiurl}&s=${title}`);
    const data = await response.json();

    setMovie(data.Search);
  };
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (Search.trim() !== "") {
      fetchmovie(Search);
    } else {
      setMovie([]); // Clear movies if search term is empty
    }
  }, [Search]);

  console.log(Movie);

  //console.log(Search);

  return (
    <div className="container">
      <h1>Movie Searching</h1>
      <div className="search">
        <input
          onChange={handlesearch}
          value={Search}
          placeholder="Type movie name"
        ></input>
      </div>
      <div className="moviecontainer">
        {Movie && Movie.length > 0 ? (
          Movie.map((movie) => <Moviecard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;

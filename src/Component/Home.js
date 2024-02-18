import React, { useState, useEffect } from "react";
import axios from "axios";
import Moviecard from "./moviecard";

const Home = () => {
  const [Movie, setMovie] = useState([]);
  const [Search, setSearch] = useState("");
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=cfaa0483";

  const fetchMovie = async (title) => {
    try {
      const response = await axios.get(`${apiurl}&s=${title}`);
      setMovie(response.data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (Search.trim() !== "") {
      fetchMovie(Search);
    } else {
      setMovie([]);
    }
  }, [Search]);

  return (
    <div className="container">
      <h1>Movie Searching</h1>
      <div className="search">
        <input
          onChange={handleSearch}
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

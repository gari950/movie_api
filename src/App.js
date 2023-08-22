import React, {useEffect, useState} from "react";

import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

import './App.css'
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=179311c1'


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Spiderman");
    },[]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };


  return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
              placeholder="Search for Movies"
              value = {searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0 ? (
                //dynamically looping all the movies using api
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                   <div className="empty">
                       <h2>No movies found</h2>
                   </div>
                )}
    </div>
  );
};

export default App;

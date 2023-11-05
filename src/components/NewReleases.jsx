// NewReleases.js
import React, { useEffect, useState } from "react";
import MovieCarousel from "./MovieCarousel";

const API_KEY = "YOUR_TMDB_API_KEY";
const NEW_RELEASES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

function NewReleases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNewReleases() {
      try {
        const response = await fetch(NEW_RELEASES_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching new releases:", error);
      }
    }

    fetchNewReleases();
  }, []);

  return (
    <div>
      <h2>New Releases</h2>
      <MovieCarousel movies={movies} />
    </div>
  );
}

export default NewReleases;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie(props, { addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push, go } = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const deleteMovie = (id) => {
    // event.preventDefault()
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(response => {
      console.log(response)
      push("/")
      go(0)
    })
  }

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button className="update-movie-button" onClick={() => push(`/update-movie/${movie.id}`)}>
        Update
      </button>
      <button className="delete-movie-button" onClick={deleteMovie}>
        Delete Movie
      </button>
    </div>
  );
}

export default Movie;

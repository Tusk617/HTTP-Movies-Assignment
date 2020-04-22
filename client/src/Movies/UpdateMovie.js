import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateMovie = (props) => {

    const [movie, setMovie] = useState(initialMovie);
    const { push, go } = useHistory();
    const { id } = useParams();
    const params = useParams();

    const fetchMovie = (id) => {
        axios
          .get(`http://localhost:5000/api/movies/${id}`)
          .then((res) => {
            console.log(res.data)
            setMovie(res.data)  
          })
          .catch((err) => console.log(err.response));
      };

      useEffect(() => {
          fetchMovie(params.id)
      }, [params.id])


    const handleChange = (event) => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movie)
        .then(response => {
            
            push(`/`)
            go(0)
        })
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Movie Title"
                        value={movie.title}
                        onChange={handleChange}
                    /><br/>
                    <input 
                        type="text"
                        name="director"
                        placeholder="Director"
                        value={movie.director}
                        onChange={handleChange}
                    /><br/>
                    <input 
                        type="number"
                        name="metascore"
                        placeholder="Metascore"
                        value={movie.metascore}
                        onChange={handleChange}
                    /><br/>
                    <input type="submit"></input>
                </form>
            </h2>
        </div>
    )
}

export default UpdateMovie;
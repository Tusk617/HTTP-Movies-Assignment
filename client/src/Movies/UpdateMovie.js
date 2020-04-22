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
    const { push } = useHistory();
    const params = useParams()

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

    return (
        <div>
            <h2>
                <form>
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
                    />
                </form>
            </h2>
        </div>
    )
}

export default UpdateMovie;
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${movie.id}`)
        .then(response => {
            console.log(response)
        })
    }, [])

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
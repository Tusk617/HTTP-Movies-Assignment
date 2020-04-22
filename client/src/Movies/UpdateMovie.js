import React from "react";

const UpdateMovie = () => {
    return (
        <div>
            <h2>
                <form>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Movie Title"
                        value=""
                    /><br/>
                    <input 
                        type="text"
                        name="director"
                        placeholder="Director"
                        value=""
                    /><br/>
                    <input 
                        type="number"
                        name="metascore"
                        placeholder="Metascore"
                        value=""
                    />
                </form>
            </h2>
        </div>
    )
}

export default UpdateMovie;
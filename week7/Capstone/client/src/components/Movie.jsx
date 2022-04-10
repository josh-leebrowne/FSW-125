import { useState } from "react";
import MovieFormHandler from "./MovieFormHandler";

const Movie = ({editMovie, deleteMovie, name, episode, year, _id}) => {
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="movie">
            {!editToggle ?
                <>
                    <h1>Name: {name}</h1>
                    <h3>Episode: {episode}</h3>
                    <p>Year: {year}</p>
                    <button className="delete-btn" onClick={() => deleteMovie(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <MovieFormHandler 
                        name={name}
                        episode={episode}
                        year={year}
                        _id={_id}
                        btnText='Submit'
                        submit={editMovie}
                    />
                    <button className="close-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Movie
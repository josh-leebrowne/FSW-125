import { useState } from "react";
import BookFormHandler from "./BookFormHandler";

const Book = ({deleteBook, editBook ,title, genre, _id}) => {
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="book">
            {!editToggle ?
                <>   
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <button className="delete-btn" onClick={() => deleteBook(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <BookFormHandler 
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText='Submit'
                        submit={editBook}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>         
            }
        </div>
    )
}

export default Book;
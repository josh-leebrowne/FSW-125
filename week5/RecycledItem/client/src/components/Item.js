import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"


const Item = ({editItem, deleteItem, name, descr, unitPrice, _id}) => {
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="item">
            { !editToggle ?
                <>
                    <h1>Item: {name}</h1>
                    <h4>Description: {descr}</h4>
                    <h4>Price: {unitPrice}</h4>
                    <button className="delete-btn" onClick={() => deleteItem(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <ItemFormHandler 
                    name={name}
                    descr={descr}
                    unitPrice={unitPrice}
                    id={_id}
                    btnText='Submit'
                    submit={editItem}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

export default Item;
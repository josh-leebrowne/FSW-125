import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Item from './components/Item';
import ItemFormHandler from './components/ItemFormHandler';


function App() {
  const [items, setItems] = useState([])

  const getItems = () => {
    axios.get('/itemsIntake')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

  const addItem = (newItem) => {
    axios.post('/itemsIntake', newItem)
    .then(res => {
      setItems(prevItem => [...prevItem, res.data]) //Causes-ReRender
    })
    .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/itemsIntake/${itemId}`, updates)
    .then(res => {  
      setItems(prevItem => prevItem.map(item => item._id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
  }
  const deleteItem = (itemId) => {
    axios.delete(`/itemsIntake/${itemId}`)
    .then(res => {
      setItems(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems()
  }, [])

  const itemList = items.map(item => 
    <Item
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={item.name}
    /> 
  )

  return (
    <div className="itemContainer">
      <ItemFormHandler btnText='Add an Item' submit={addItem}/>
      {itemList}
    </div>
  );
}

export default App;

import {useState} from 'react'
import axios from 'axios'

const MovieFormHandler = ({btnText, submit, name, episode, _id}) => {
    const initInputs = {name: name || " ", episode: episode || " "}
    const [inputs, setInputs] = useState(initInputs)
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault()
        let q = search
        let response = await axios(`http://localhost:3000/movies/search/name?name=${q}`)
        setInputs(response.data)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                className='input'
                type='text'
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Name"/>
            <input
                className='input' 
                type="text"
                name="episode"
                value={inputs.episode}
                onChange={handleChange}
                placeholder="Episode"/>
                <button className='add-btn'>{btnText}</button>
            <input
                className='search'
                value={search}
                onChange={handleSearchChange}
                name="search"
                type='text'
                placeholder='Search For a Movie'/>
                <button type="submit" className='search-btn' onClick={handleSearchSubmit}>Search</button>
        </form>
    )
}

export default MovieFormHandler
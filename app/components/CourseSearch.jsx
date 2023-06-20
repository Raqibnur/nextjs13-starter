'use client'
import { useState } from "react"

const CourseSearch = ({getSearchResult}) =>{
    const [query, setQuery] = useState('');
    const handleSearch = async (e) =>{
        e.preventDefault();

        const res = await fetch(`/api/courses/search?query=${query}`)
        const result = await res.json();

        getSearchResult(result);
    }
    return(
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                className="search-input"
                placeholder="Search Courses ...."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>
                Search
            </button>
        </form>
    )
}

export default CourseSearch
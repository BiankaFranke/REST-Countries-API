import { useState } from "react";
import './SearchBar.css';
import '../../App.css';

const SearchBar = ({ searchedCountry }) => {
    const [query, setQuery] = useState("");

    const changeHandler = (e) => {
        e.preventDefault()
        searchedCountry(query);
        console.log(query)
    }

    return (
        <div className='SearchBar'>
            <form onSubmit={changeHandler}>
                <button 
                    className="Search-Function"
                    id="searchBtn"
                    type="submit">
                </button>
                    
                <input 
                    className='Search' 
                    type="search" 
                    name="searchBar" 
                    id="searchBar" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search for a country' />
                </form>
        </div>
    );
}
 
export default SearchBar;
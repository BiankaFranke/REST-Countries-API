import { useState } from "react";
import './SearchBar.css';
import '../../App.css';

const SearchBar = ({ searchedCountry }, props) => {
    const [query, setQuery] = useState("");

    const changeHandler = async (e) => {
        e.preventDefault()
        searchedCountry(query);
    }

    return (
        <div className={"SearchBar " + props.theme + "Other"}>
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
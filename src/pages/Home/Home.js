import { useState, useEffect } from "react";
import './Home.css';
import '../../App.css';

// IMPORT COMPONENTS
import CountryCard from '../../components/CountryCard/CountryCard';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const url = `https://restcountries.com/v3.1`;

    const allCountries = async () => {
        const response = await fetch(`${url}/all`);
        const data = await response.json();
        setCountries(data);
    }

    const getCountryByName = async (name) => {
        if (name === '') {
            alert("Please enter a country name!");
            return;
        }

        const response = await fetch(`${url}/name/${name}`);
        const data = await response.json();
        setCountries(data);
    };

    const getCountryByRegion = async (regionName) => {
        const response = await fetch(`${url}/region/${regionName}`);
        const data = await response.json();
        setCountries(data);
    };

    useEffect(() => {
        allCountries();
    }, []);

    return (
        <div className="Home">
            <div className='HomeFilterSearch'>
                <SearchBar searchedCountry={getCountryByName} />
                <Filter selectedRegion={getCountryByRegion} />
            </div>

            <div className='HomeCountryCard'>
            {countries.map((item, index) => (
                <CountryCard
                src={item.flags.png}
                name={item.name.common}
                population={new Intl.NumberFormat().format(item.population)}
                region={item.region}
                capital={item.capital}
                key={index}
                />
                ))}
            </div>
        </div>
    );
}
 
export default Home;
import './Country.css';
import '../../App.css';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from "react";

// IMPORT COMPONENTS
import BackBtn from '../../components/BackBtn/BackBtn';

const Country = () => {
    const url = `https://restcountries.com/v3.1`;
    const [country, setCountry] = useState({});
    let { name } = useParams();

    useEffect(() => {
        fetch(`${url}/name/${name}`)
          .then(res => res.json())
          .then(data => setCountry(data[0]));
    }, [name]);

    return (
            <div className='country'>
                    <div className='countryData'>
                        <div className='countryHeader'>
                            <Link to="/"><BackBtn /></Link> 
                        </div>
                        <div className='countryFlag'>
                            <img src={country.flags?.png} alt={`${country.name?.common} Flag`} />
                        </div>
                        <div className='countryDataDetail'>
                            <h2>{country.name?.common}</h2>
                            <div className='countryDataDetailMore'>
                                
                                <div className='mainInfo'>
                                    <p>Population: <span>{new Intl.NumberFormat().format(country.population)}</span></p>
                                    <p>Region: <span>{country.region}</span></p>
                                    <p>Sub Region: <span>{country.subregion}</span></p>
                                </div>
                                <div className='subInfo'>
                                    <p>Captial: <span>{country.capital?.[0]}</span></p>
                                    {/* <p>Currencies: <span>{Object.values(country.currencies || {}).join(", ")}</span></p> */}
                                    <p>Languages: <span>{Object.values(country.languages || {}).join(", ")}</span></p>
                                    <p>Border Countries: <span>{Object.values(country.borders || {}).join(", ")}</span></p> 
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    );
}
 
export default Country;
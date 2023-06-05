import { Link } from "react-router-dom";
import './CountryCard.css';
import '../../App.css';

const CountryCard = (props) => {
    return (
        <Link to={`/${props.name}`} className={"LinkRoutes CountryCard " + props.theme + "Other"}>
            <div className='flag'>
                <img src={props.src} alt={`${props.name?.common} Flag`} />
            </div>
            <div className="countryData">
                <h2 className="name">{props.name}</h2>
                <p className='population'>Population: <span>{props.population}</span></p>
                <p className='region'>Region: <span>{props.region}</span></p>
                <p className='capital'>Capital: <span>{props.capital}</span></p>
            </div>
        </Link>
    );
}
 
export default CountryCard;
import './Filter.css';
import '../../App.css';

const Filter = ({ selectedRegion }) => {

    const handleClick = (e) => {
        e.preventDefault();
        const regionName = e.target.value;
        selectedRegion(regionName);
    }

    return (
        <div className='Filter'>
            <select onChange={handleClick}>
                <option className="option">Filter by Region</option>
                <option className="option" value="Africa">
                    Africa
                </option>
                <option className="option" value="America">
                    America
                </option>
                <option className="option" value="Asia">
                    Asia
                </option>
                <option className="option" value="Europe">
                    Europe
                </option>
                <option className="option" value="Oceania">
                    Oceania
                </option>
            </select>
        </div>
    );
}
 
export default Filter;
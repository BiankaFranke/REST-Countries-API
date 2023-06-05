
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import '../../App.css';

const Header = (props) => {
    return (
        <div id='Header' className={props.theme + "Other"}>
            <div className='Logo'>
                <Link to="/" className='LinkRoutes'><h1>Where in the world?</h1></Link>
            </div>
            <div className='toggle'>
                <button class="themeMode" onClick={props.handleToggle} id="moon"><FontAwesomeIcon icon={faMoon} />Dark Mode</button>
                <button class="themeMode" onClick={props.handleToggle} id="sun"><FontAwesomeIcon icon={faSun} />Light Mode</button>
            </div>            
        </div>
    );
}
 
export default Header;
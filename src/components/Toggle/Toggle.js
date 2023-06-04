import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import './Toggle.css';
import '../../App.css';

const Toggle = () => {
    const darkMode = (e) => {
        e.preventDefault()
        console.log('dark mode');
    }

    return (
        <div className='Toggle'>
            <button id="themeMode" onClick={darkMode}><FontAwesomeIcon icon={faMoon} id="moon" className='darkMode'/>Dark Mode</button>
        </div>
    );
}
 
export default Toggle;
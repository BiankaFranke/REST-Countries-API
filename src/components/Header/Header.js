import { Link } from "react-router-dom";
import './Header.css';
import '../../App.css';

// IMPORT COMPONENTS
import Toggle from '../Toggle/Toggle';

const Header = () => {
    return (
        <div className='Header'>
            <div className='Logo'>
                <Link to="/" className='LinkRoutes'><h1>Where in the world?</h1></Link>
            </div>
            <div className='toggle'>
                <Toggle />
            </div>            
        </div>
    );
}
 
export default Header;
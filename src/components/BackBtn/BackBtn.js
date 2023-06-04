import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './BackBtn.css';
import '../../App.css';

const BackBtn = () => {
    return (
        <div className="BackBtn">
            <button id="btnBack"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
        </div>
    );
}
 
export default BackBtn;
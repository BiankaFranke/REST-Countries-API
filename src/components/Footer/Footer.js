import './Footer.css';
import '../../App.css';

const Footer = (props) => {
    return (
        <div className={"Footer " + props.theme + "Other"}>
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a href="https://github.com/BiankaFranke">Bianka</a>.</p>
        </div>
    );
}
 
export default Footer;
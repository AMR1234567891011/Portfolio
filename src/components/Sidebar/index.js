
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-a.png'
import LogoS from '../../assets/images/Subtitle2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons"
import style from "../../index.module.scss";
const { iconColor } = style;
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
            <img className="sub-logo" src={LogoS} alt="logoSubtitle" />
         </Link>
         <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color={iconColor} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color={iconColor} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
            </NavLink>
         </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/asher-rosen-53194623a/"> 
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/AMR1234567891011"> 
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
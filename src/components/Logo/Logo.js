import "./Logo.css";
import logo from '../../assets/images/wayfair-logo.svg';

const Logo = () => {
    
    /*
      Logo component/area used in the header
    */
    return ( 
    <img src={logo} className="Logo" alt="Wayfair Partner Home" />
    )
};

export default Logo;
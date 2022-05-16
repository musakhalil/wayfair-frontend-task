import {useState} from 'react';
import "./UserMenu.css";
import {BiUserCircle} from "react-icons/bi";
import {FaChevronDown} from "react-icons/fa";

const UserMenu = ({show}) => {
    
    /*
      UserMenu component/area used in the header
    */
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <div className="User-Menu-Container">
            {/*
              toggle the menu on click of the avatar button
            */}
            <nav className={`User-Menu ${userMenuOpen ? "Show" : ""}`}>
                <div className="Nav-Header">
                    <span className="Username">
                        Safavieh
                    </span>
                    <span className="Username-Arrow">
                        <FaChevronDown />
                    </span>
                </div>
                <ul className="User-Menu-Items">
                    <li>Account Settings</li>
                    <li>User Management</li>
                    <li>My Team</li>
                    <li>English (UK)</li>
                    <li>Logout</li>
                </ul>
            </nav>
            {/*
              toggle the menu when clicking the below and add a class name when the menu is expanded to handle the color in css
            */}
            <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="Avatar-Button"
            >
                <BiUserCircle className={`Avatar ${userMenuOpen ? "Expanded" : ""}`} />
            </button>
        </div>
    )
};

export default UserMenu;
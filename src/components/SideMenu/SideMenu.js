import { useState } from 'react';
import { connect } from "react-redux";
import SubMenu from "../SubMenu/SubMenu";
import './SideMenu.css';
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {BiMenu} from "react-icons/bi";

/*
  Map the state from redux store to use it for side menu expansion and minimization
*/
const mapStateToProps = state => {
    return {
        menuState: state
    };
};

/*
  Map Actions from redux store to expand and minimize menu by performing an action
*/
const mapDispatchToProps = dispatch => {
    return {
        expandMenu: () => dispatch({ type: 'expand' }),
        minimizeMenu: () => dispatch({type: 'minimize'})
    }
};

const SideMenu = ({ items, expandMenu, minimizeMenu }) => {
    const [menuExpanded, setMenuExpanded] = useState(String);
    const [menuOpen, setMenuOpen] = useState(true);
    /*
      The function that handles toggling menu expansion
      in case of minimizing: it will remove the stored expanded menu item, chage menuOpen state to minimized and dispatch the action to the redux store to use it across the app
      in case of expanding: it chage menuOpen state to expanded and dispatch the action to the redux store to use it across the app
    */
    const handleMenuExpansion = () => {
        if (menuOpen) {
            setMenuOpen(false);
            setMenuExpanded(null);
            minimizeMenu();
        } else {
            setMenuOpen(true);
            expandMenu();
        }
    }

    const handleMenuItemExpansion = (itemID) => {
        setMenuExpanded(itemID);
        setMenuOpen(true);
        expandMenu();
    }
    
    return (
        <nav className={menuOpen ? 'Menu-Open':''} menuopen={menuOpen.toString()}>
            <div>
                <button
                    title="Menu-Button"
                    onClick={() => handleMenuExpansion()}
                    aria-pressed={menuOpen ? "true" : "false"}
                    className="Menu-Toggle-Icon"
                >
                    <BiMenu />
                </button>
                {items ?
                <ul>
                    { items.length > 0 && items.map((item) => (
                    <li key={item.id}>      
                    { (item.children.length > 0) ?
                        <div>        
                            <button 
                                type="button"
                                aria-expanded={menuExpanded === item.id ? "true" : "false"}
                                onClick={() => {(menuExpanded === item.id) ? setMenuExpanded(null) : handleMenuItemExpansion(item.id)}}
                                className="Menu-Btn"
                            >
                                {/* Here is where you can make the icons dynamic when importing the icons pack
                                <span className={`menu-btn-icon ` + item.icon}></span>
                                */}
                                <span className="Menu-Item-Title">
                                    <SiHomeassistantcommunitystore className="Menu-Btn-Icon" />
                                    {menuOpen && <h3 className="Title">{item.title}</h3>}
                                </span>
                                {/*
                                  Check the menu item expansion state and render the correct arrow accordingly
                                */}
                                {menuOpen && <span className="Menu-Item-Arrow">
                                    { (menuExpanded === item.id) ?
                                    <FaChevronUp />
                                    :
                                    <FaChevronDown />
                                    }
                                </span>}
                            </button>
                            <div>
                                {/*
                                  Call the SubMenu component which will render the children of each menu item
                                */}
                                <SubMenu submenu={item.children} itemExpanded={(item.id === menuExpanded) ? true : false} />
                            </div>
                        </div>
                        :
                        <div className="Menu-Item">
                            {/* Here is where you can make the icons dynamic when importing the icons pack
                            <span className={`Menu-Btn-Icon ` + item.icon}></span>
                            */}
                            <span className="Menu-Item-Icon">
                                <SiHomeassistantcommunitystore />
                            </span>
                            {menuOpen && <h3 className="Title">{item.title}</h3>}
                        </div>
                    }
                    </li>
                    ))}
                </ul>
                :
                <div className="No-Menu-Items">
                    {/*
                      Here what is rendered if there is no menu items
                    */}
                    <span>
                        No Menu Items!
                    </span>
                </div>
                }
            </div>
        </nav>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(SideMenu);
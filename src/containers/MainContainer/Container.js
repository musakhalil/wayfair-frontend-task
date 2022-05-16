import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import SideMenu from '../../components/SideMenu/SideMenu';
import Header from '../../components/Header/Header';
import {MenuItems} from "../../api/MenuItems";
import './Container.css';

/*
  Map the state from redux store to use it for side menu expansion and minimization
*/
const mapStateToProps = state => {
    return {
        menuState: state
    };
};

const MainComponent = ({ menuState }) => {
    
    /*
      The main contianer for our app which contains the structure for the page
    */
    const [items, setItems] = useState([]);
    const getMenuItems = async () => {
        const links = await MenuItems();
        if (links) setItems(links.data);
    }
    
    /*
      Fetch menu items from API endpoint
    */
    useEffect(() => {    
        getMenuItems();
    }, []);
    
    return(
    <div className="Main-Structure">
        <div className={`Side-Menu ${menuState === 'expanded' ? 'Menu-Open':'Menu-Closed'} `}>
            <SideMenu items={items} />
        </div>
        <div className="Main-Content">
            <Header />
        </div>
    </div>
    );
}

export default connect(mapStateToProps)(MainComponent);
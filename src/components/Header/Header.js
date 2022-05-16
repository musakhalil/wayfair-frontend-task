import './Header.css';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
    
    /*
        Header component that contains the header structure
    */
    return (        
    <header className="App-header">
        <Logo className="Logo" />

        <div className="Header-Right">
            <UserMenu />
        </div>
    </header>
    );
   };
   
   export default Header;
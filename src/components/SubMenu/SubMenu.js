import './SubMenu.css';

const SubMenu = ({ submenu, itemExpanded }) => {
  
    /*
      SubMenu component which receives the submenu array and a flag to check if to show this 
      submenu or no as the default state is hidden and triggered on the parent click
    */
    return (
     <ul className={`Dropdown ${itemExpanded ? "Show" : ""}`}>
      {submenu.map((child) => (
        <li key={child.id} aria-level="2">
            <span className="Submenu-Title">{child.title}</span>
        </li>
      ))}
     </ul>
    );
  };
   
export default SubMenu;
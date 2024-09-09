import React from "react";
import { Link } from 'react-router-dom';
import { NavItem, Nav , UncontrolledCollapse} from "reactstrap";

function MenuItems(props){
    return(
        <Nav className="navbar-nav text-light">
            {
                props.navItems.map((navItem,i)=>(
                    (navItem.hasOwnProperty('path'))?
                    (<NavItem style={{left:'-1.5rem'}} key={i+(props.pid?props.pid:"")} role="presentation"><Link className={"nav-link "+(props.currentPath===navItem.path?"active":"")} to={navItem.path}><i className={"fas fa-"+navItem.icon}></i><span>{navItem.name}</span></Link></NavItem>):
                    (
                        <div key={i+(props.pid?props.pid:"")}>
                            <NavItem style={{left:'-1.5rem'}} role="presentation"><span className="nav-link" id={navItem.id}  role="presentation"><i className={"fas fa-"+navItem.icon}></i><span>{navItem.name}</span></span></NavItem>
                            <UncontrolledCollapse toggler={"#"+navItem.id}>
                                <hr className="mt-0 " style={{borderColor:"#65ce91"}}></hr>
                                <MenuItems navItems={navItem.subMenu} currentPath={props.currentPath} id={navItem.pid}/>
                                <hr className="mt-0 " style={{borderColor:"#65ce91"}}></hr>
                            </UncontrolledCollapse>
                        </div>
                    )
                ))
            }            
        </Nav>
    );
} 
export default MenuItems;
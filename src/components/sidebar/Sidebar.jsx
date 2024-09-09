import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import MenuItems from '../menuitems/MenuItems';

import './Sidebar.css';
const SideBar = (props) => {
    return (
        <Navbar className={"navbar-dark align-items-start sidebar sidebar-dark accordion bg-dark bg-gradient p-0 " + props.sideBarState}>
            <div className="container-fluid d-flex flex-column p-0">
                <NavbarBrand className=" d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-graduation-cap"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>SQL Playground</span></div>
                </NavbarBrand>
                <hr className="sidebar-divider my-0" />
                <MenuItems navItems={props.navItems} currentPath={props.currentPath} />
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" onClick={props.handleToggle}></button></div>
            </div>
        </Navbar>
    );
};

export default SideBar;
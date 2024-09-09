import React from "react";
import { Navbar,Nav } from "reactstrap";
import UserDropdown from "../userdropdown/UserDropdown";
import Alerts from "../alerts/Alerts";
const Topbar = (props) =>{
    return(
        <Navbar className="navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
                <div className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button" onClick={props.handleToggle}>
                    <i className="fas fa-bars"></i>
                </div>
                
                <Nav className="navbar-nav flex-nowrap ml-auto float-right">
                    <Alerts/>     
                    <div className="d-none d-sm-block topbar-divider"></div>
                    <UserDropdown/>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Topbar;
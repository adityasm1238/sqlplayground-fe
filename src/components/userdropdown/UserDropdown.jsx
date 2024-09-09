import React, { useState } from "react";
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from "reactstrap";

import useAuth from "../../hooks/useAuth";

const UserDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {user, logout} = useAuth()
    return(
        <Dropdown className="nav-item no-arrow" role="presentation" isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                <DropdownToggle tag="a" className="nav-link" data-toggle="dropdown" aria-expanded={dropdownOpen} ><span className="d-lg-inline mr-2 text-gray-600 small">{user}</span></DropdownToggle>
                <DropdownMenu className="shadow" role="menu">
                    {/* <DropdownItem tag="a" role="presentation" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</DropdownItem>
                    <DropdownItem tag="a" role="presentation" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</DropdownItem>
                    <DropdownItem tag="a" role="presentation" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</DropdownItem>
                    <div className="dropdown-divider"></div> */}
                    <DropdownItem tag="a" role="presentation" onClick={logout}><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</DropdownItem>
                </DropdownMenu>

        </Dropdown>
    );
}

export default UserDropdown;
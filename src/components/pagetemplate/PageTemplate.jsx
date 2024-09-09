import React, { useState } from "react";
import SideBar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
const PageTemplate = (props) => {
    
    const [toggled, setToggled] = useState('toggled');

    const toggleNavBar = event =>{
        event.preventDefault();
        if(toggled === '')
            setToggled('toggled');
        else
            setToggled('');
    };

    return(
        <div id="page-top">
            <div id="wrapper">
                <SideBar currentPath = {props.currentPath} sideBarState={toggled} handleToggle={toggleNavBar} navItems = {props.navItems}/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <Topbar handleToggle={toggleNavBar}/>
                            {props.children}
                    </div>
                    <Footer/>
                </div>
                <a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    );
}

export default PageTemplate;
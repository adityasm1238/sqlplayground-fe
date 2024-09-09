import React from "react";
import Footer from "../../components/footer/Footer";

function NotFound(){
        return(
            <div id="page-top">
                <div className="d-flex flex-column" id="content-wrapper">
                    <div className="container-fluid">
                        <div className="text-center mt-5">
                            <div className="error mx-auto" data-text="404">
                                <p className="m-0">404</p>
                            </div>
                            <p className="text-dark mb-5 lead">Page Not Found</p>
                            <p className="text-black-50 mb-0">It looks like you found a glitch in the matrix...</p><a href="/">← Back to Home</a></div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default NotFound;
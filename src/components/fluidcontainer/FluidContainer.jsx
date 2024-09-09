import React from "react";

const FluidContainer = (props)=>{
    return (
        <div className="container-fluid">
            {
                (props.title)?
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">{props.title}</h3>
                </div>:null
            }
            {props.children}
        </div>
    );
};

export default FluidContainer;
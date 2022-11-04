import React from "react";

const Scroll=(props)=>{
    return (
        <div className="overflow-y-scroll h-[600px]">
            {props.children}
        </div>
    )
}
export default Scroll;
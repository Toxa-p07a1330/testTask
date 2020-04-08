import React from "react";
import "./Header.css"
const Header = ()=>{
    return (
        <div className={"Header"}>
            <div className={"Header-menu"}>
                <img src = {""} />
            </div>
            <div className={"Header-logo"}>
                <div style={{marginLeft: "40%", marginTop: "2%"}}>
                    <img src={"http://localhost/img/logo.bmp"} />
                </div>
            </div>
            <div className={"Header-sorter"}>
                <img src={""} />
            </div>

        </div>
    )  ;
};

export default  Header;
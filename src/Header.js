import React from "react";
import "./Header.css"
const Header = ()=>{
    return (
        <div className={"Header"}>
            <div className={"Header-menu"} onClick={()=>{alert("Go to menu")}}>
                <img src = {"https://a.radikal.ru/a43/2004/3a/9e941ac7649e.jpg"}  height={"80%"}/>
            </div>
            <div className={"Header-logo"} onClick={()=>{alert("Go to main page")}}>
                <div style={{marginLeft: "40%"}}>
                    <img src={"https://a.radikal.ru/a36/2004/ae/169893a5bfa4.jpg"} />
                </div>
            </div>
            <div className={"Header-sort"} onClick={()=>{alert("sort")}}>
                <img src={"https://b.radikal.ru/b43/2004/98/32fcc2ff4021.jpg"}  height={"80%"}/>
            </div>

        </div>
    )  ;
};

export default  Header;
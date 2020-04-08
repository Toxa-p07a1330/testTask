import React from "react";
import "./Panel.css"

let Panel = (props)=>{
    let id= props.id;
    let image= props.image;
    let date= props._date;
    let topic = props.topic;
    let sity= props.sity;
    let descript= props.descript;
    let visitors= props.visitors;
    let speakers= props.speakers;
    let price= props.price;

    return (
        <div className = {"Panel"}>
            <div>
                <img src={image} className={"Panel-image"} height={window.innerHeight*0.12}/>
            </div>
            <div className={"Panel-topic"}><b> {topic}</b></div>
            <div className={"Panel-sity"}> {sity} </div>
            <hr width={"15%"} align={"center"} color={"green"} size={"5px"} />
            <div className={"Panel-descript"}> {descript}</div>
            <div className={"Panel-foot"}>
                <div className={"Panel-foot-block"}>
                    <img src={"http://localhost/img/users.png"} className={"Panel-foot-block-image"}/>
                    {visitors}
                </div>
                <div className={"Panel-foot-block"}>
                    <img src={"http://localhost/img/user.jpg"} className={"Panel-foot-block-image"}/>
                    {speakers}
                </div>
                <div className={"Panel-foot-block"}>
                    <img src={"http://localhost/img/coin.jpg"}
                        className={"Panel-foot-block-image"}/>
                    {price}
                </div>


            </div>
        </div>
    )
};

export default Panel;

import React from "react";
import './Scroll.css'
import Panel from "./Panel";

let dataPanel = [
    {
        "id": "12345",
        "image": "https://ptfair.ru/netcat_files/1/183/DSC_0159_0.JPG",
        "date": "22-26 февраля 2016",
        "sity": "Уфа",
        "descript": "Машиностроение, промышленные насосы и клапаны, Гидравлика и пневматика, промышленное оборудование",
        "visitors": ">5000",
        "speakers": "74",
        "price": "12000"
    },
    {
        "id": "12346",
        "image": "https://ptfair.ru/netcat_files/1/183/1_0.jpg",
        "date": "22-26 февраля 2016",
        "sity": "Уфа",
        "descript": "Машиностроение, промышленные насосы и клапаны, Гидравлика и пневматика, промышленное оборудование",
        "visitors": ">5000",
        "speakers": "74",
        "price": "12000"
    },
    {
        "id":"123457",
        "image": "https://static.tildacdn.com/tild3963-6362-4436-b033-396330633565/TAA_6032.jpg",
        "date": "22-26 февраля 2016",
        "sity": "Уфа",
        "descript": "Машиностроение, промышленные насосы и клапаны, Гидравлика и пневматика, промышленное оборудование",
        "visitors": ">5000",
        "speakers": "74",
        "price": "12000"
    }
]
;




const Scroll = ()=>{




    let scroll = dataPanel.map(
        (data)=>
            <div className={"Scroll"}>
                <Panel
                    id = {data.id}
                    image ={data.image}
                    _date ={data.data}
                    sity ={data.sity}
                    descript ={data.descript}
                    visitors ={data.visitors}
                    speakers ={data.speakers}
                    price ={data.price}
                    key = {data.id}
                />
            </div>
        );

    return  (
        <div>{scroll}</div>
    )

};


export default  Scroll;
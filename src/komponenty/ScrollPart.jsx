import "../style/ScrollPart.css"
import { useState } from "react";
import Karta from "./Karta"
import KartaWieksza from "./KartaWieksza";
import RuchomeNapisy from "./RuchomeNapisy"

function ScrollPart({kolor,nazwa,ezyk}){
    const [activeId, setActiveId] = useState(null); 
    console.log(activeId);
    return (
        <div className="Bloczek" style={{backgroundColor:kolor}}>
            <div style={{margin:'auto',width:"80%",marginTop:"50px",fontWeight:"bolder"}}>
                <p className="Nag">Język Programowania</p>
                <RuchomeNapisy display={nazwa} kolor="black" size={150} family="DejaVu Sans Mono, monospace"/>
            </div>
            <div style={{width:"70%",margin:"auto",padding:"40px",display:"flex",flexWrap:"wrap"}}>
                <Karta tytul="Powstanie" watrosc="Kliknij, aby odkryć zawartość" kolorek={kolor} onOpen={(value)=>setActiveId(value)}/>
                <Karta tytul="Opis" watrosc="Kliknij, aby odkryć zawartość" kolorek={kolor} onOpen={(value)=>setActiveId(value)}/>
                <Karta tytul="Zastosowanie" watrosc="Kliknij, aby odkryć zawartość"kolorek={kolor} onOpen={(value)=>setActiveId(value)}/>
            </div>
            {activeId !== null && (
            <KartaWieksza jezyk={ezyk} info={activeId} onClose={()=> setActiveId(null)}/>
            )}
        </div>
    )
}

export default ScrollPart
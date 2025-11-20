import "../style/KartaWieksza.css"
import { Karty } from "../assets/Teksty"
import { useEffect, useRef } from "react";

function KartaWieksza({jezyk,info, onClose}){
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="DuzaKarta" ref={ref} >
            <div className="Tytul">{Karty[jezyk][info]["tytul"]}</div>
            <div className="Zawartosc">
                {Object.entries(Karty[jezyk][info]["zawartosc"]).map(([key,value])=>{
                    return (<div className="linie">{key} : {value}</div>)
                })}</div>
        </div>
    );
}

export default KartaWieksza
import "../style/GlowneMain.css"
import Karta from "./Karta"
import RuchomeNapisy from "./RuchomeNapisy"
import { Karty } from "../assets/Teksty"
// import { KoniecContext} from "./Poczatek"

function GlowneMain(){
    return(
        <div className={`glowneOkno`}>
            <RuchomeNapisy display="Języki" kolor="black" size="200px" family="DejaVu Sans Mono, monospace" klasa={poof}/>
            <RuchomeNapisy display="Programowania" kolor="black" size="150px" family="DejaVu Sans Mono, monospace" klasa={poof}/>
            <div className="Info">
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
            </div>
        </div>
    )
}

export default GlowneMain
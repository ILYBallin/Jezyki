import "../style/GlowneMain.css"
import Karta from "./Karta"
import RuchomeNapisy from "./RuchomeNapisy"
import { Karty } from "../assets/Teksty"
// import { KoniecContext} from "./Poczatek"

function GlowneMain(){
    return(
        <div className={`glowneOkno`}>
            <RuchomeNapisy display="Języki" kolor="black" size={200} family="DejaVu Sans Mono, monospace"/>
            <RuchomeNapisy display="Programowania" kolor="black" size={150} family="DejaVu Sans Mono, monospace"/>
            <RuchomeNapisy display="Konrad Trączyk" kolor="black" size={70} family="DejaVu Sans Mono, monospace"/>
            <RuchomeNapisy display="Mateusz Trzop" kolor="black" size={70} family="DejaVu Sans Mono, monospace"/>
        </div>
    )
}

export default GlowneMain
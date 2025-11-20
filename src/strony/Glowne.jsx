import "../style/Glowne.css"
import GlownyKoniec from "../komponenty/GlownyKoniec"
import GlowneMain from "../komponenty/GlowneMain"
import GlowneScroll from "../komponenty/GlowneScroll"

function Glowne() {
    return(
        <div className="glowneTlo">
            <GlowneMain/>
            <GlowneScroll/>
            <GlownyKoniec/>
        </div>
    )
}

export default Glowne
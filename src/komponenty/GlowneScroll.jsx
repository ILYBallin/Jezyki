import "../style/GlowneScroll.css"
import ScrollPart from "./ScrollPart"

function GlowneScroll(){
    return(
        <div className="glowneScroll">
            <div className="scrollView">
                <div className="scrollMover">
                    <ScrollPart nazwa="PYTHON" kolor="rgba(169, 223, 255, 0.4)" ezyk="Python"/>
                    <ScrollPart nazwa="C" kolor="rgba(171, 242, 255, 0.4)" ezyk="C"/>
                    <ScrollPart nazwa="C++" kolor="rgba(166, 255, 233, 0.4)" ezyk="Cpp"/>
                    <ScrollPart nazwa="Java" kolor="rgba(168, 255, 207, 0.4)" ezyk="Java"/>
                </div>
            </div>
        </div>
    )
}

export default GlowneScroll
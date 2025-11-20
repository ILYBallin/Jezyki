import "../style/GlowneScroll.css"
import ScrollPart from "./ScrollPart"

function GlowneScroll(){
    return(
        <div className="glowneScroll">
            <div className="scrollView">
                <div className="scrollMover">
                    <ScrollPart kolor="red"/>
                    <ScrollPart kolor="blue"/>
                    <ScrollPart kolor="green"/>
                    <ScrollPart kolor="yellow"/>
                    <ScrollPart kolor="orange"/>
                </div>
            </div>
        </div>
    )
}

export default GlowneScroll
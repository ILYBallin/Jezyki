import '../style/RuchomeNapisy.css'
import { LiteryRuszane } from './NapisyPoczatek';

let delay = 0.2;

function RuchomeNapisy({display, kolor, size, family}){
    let listaLiter = Array.from(display)
    return (
        <div className="holdery" style={{height:size+50+"px"}}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} opoznienie={delay+=0.02} kolor={kolor} rozmiar={size+"px"} czcionka={family}/>
                ))}
            </p>
        </div>
    );
}

export default RuchomeNapisy
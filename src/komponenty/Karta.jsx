import "../style/Karta.css"

function Karta({tytul,watrosc,kolorek,onOpen}){
    return(
        <div className="karta" style={{backgroundColor:kolorek}} onClick={()=>onOpen(tytul)}>
            <h3 className="kartaTytul">{tytul}</h3>
            <p className="kartaWartosc">{watrosc}</p>
        </div>
    )
}

export default Karta
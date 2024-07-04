
import "./Teste.css";
import ferro from "../assets/ferro.jpg";

function Produto(){
  const nome = "ferro de passar";
  const preco = 100;
  const desconto = 90;
 
    return(
       <section>
         <h2 className="texto2">Produto</h2>
         <div  className="texto1">  
                <p> Nome: {nome}</p>
                <img className="ferro" src={ferro} alt="Ferro de Passar"/>
                <p className="preco"> Preço: {preco} </p>
                <p> Preço com desconto:{desconto} </p>
         </div>
       </section>
    );

}


export default Produto;
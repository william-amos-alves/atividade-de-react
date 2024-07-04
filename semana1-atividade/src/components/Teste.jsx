
import "./Teste.css";

function Teste(){
  const media = 6.0;
  const apr = "aprovado";
  const rep = "reprovado";
  const statusClass = media >= 7 ? apr: rep
    return(
       <section>
         <h2 className="texto2">Ficha do Aluno</h2>
         <div  className="texto1">  
                <p> Nome: William Amós Alves</p>
                <p> Série: 9º ano </p>
                <p> Média: {media} </p>
                <p> Resultado: <strong className={statusClass}> {statusClass}</strong> </p>
         </div>
       </section>
    );

}


export default Teste;
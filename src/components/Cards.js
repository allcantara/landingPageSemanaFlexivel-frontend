import React from "react";
import "./../App.scss";

const Cards = ({ titulo, texto }) => {
  return (
    <div className="mb-3">
      <div className="card-deck p-md-3">
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Grupo  no Whatsapp</h5>
            <p className="card-text">
              O grupo criado será exclusivo para quem fizer o cadastro na
              semana flexível.
            </p>
          </div>
        </div>
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Aulas exclusivas em video</h5>
            <p className="card-text">
              Durante a semana será entregue um video por dia
              onde eu falo sobre temas relacionados a dieta
              flexíel.
            </p>
          </div>
        </div>
      </div>

      <div className="card-deck p-md-3">
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Aulas rápidas e dinâmicas</h5>
            <p className="card-text">
              As aulas serão objetivas e com conteúdo de alto
              valor. Nada de enrolação, aqui vou direto ao ponto.
            </p>
          </div>
        </div>
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Perguntas e respostas</h5>
            <p className="card-text">
              Após o vídeo do dia, vou abrir o grupo por 30 min
              na parte da noite, para que eu possa tirar dúvidas
              relacionadas ao tema da aula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;

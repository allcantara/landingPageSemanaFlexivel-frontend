import React from "react";
import "./../App.scss";

const Cards = ({ titulo, texto }) => {
  return (
    <div className="mb-3">
      <div className="card-deck p-md-3">
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">A importância da flexibilidade </h5>
            <p className="card-text">
              Como não fazer uma dieta restritiva pode beneficiar seus resultados e
              fazer você ficar no shape de forma mais eficiente.
            </p>
          </div>
        </div>
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Estimar suas calorias</h5>
            <p className="card-text">
              Como calcular o número de calorias diárias que você gasta e baseado nisso,
              definir quanto você pode comer por dia de acordo com o seu objetivo.
            </p>
          </div>
        </div>
      </div>
      <div className="card-deck p-md-3">
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Calcular os macronutrientes</h5>
            <p className="card-text">
              Tudo que você precisa saber sobre proteína, gordura e carboidrato. E o
              principal: quanto você deve ingerir por dia.
            </p>
          </div>
        </div>
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Definindo a sua rotina</h5>
            <p className="card-text">
              Quanto de água deve ingerir por dia, recomendação de vegetais e frutas,
              quantas refeições fazer e muitos mais.
            </p>
          </div>
        </div>
      </div>
      <div className="card-deck p-md-3">
        <div className="card m-sm-2 divCard">
          <div className="card-body">
            <h5 className="card-title">Regra 80/20</h5>
            <p className="card-text">
              Como equilibrar as suas escolhas alimentares no dia a dia para conseguir
              comer tudo que gosta sem afetar seus resultados ou saúde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;

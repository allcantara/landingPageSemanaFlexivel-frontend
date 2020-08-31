import React, { useState } from "react";
import imgHeader from "./assets/imgHeader.jpeg";
import expert from "./assets/expert.jpeg";
import "./App.scss";
import Cards from "./components/Cards.js";
import Modal from "./components/Modal.js";

import env from "dotenv";
env.config();

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="lala">
      <div className="row">
        <section className="header">
          <div className="img-container">
            <img src={imgHeader} className="img-fluid" alt="Semana Flexível" />
          </div>
          <button
            className="button mb-5"
            onClick={() => setIsModalVisible(true)}
          >
            INSCREVA-SE AGORA NA SEMANA FLEXÍVEL
          </button>
        </section>
      </div>

      <div className="row p-md-4 card-container">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">
            Durante essa semana eu irei te ensinar 5 passos
            <br />
            para ficar no shape comendo o que gosta!!!
          </h3>
        </div>
        <div className="col"></div>
        <Cards />
        <div className="col"></div>
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold subtitle-card">
            E o melhor de tudo é que vai ser 100% online e GRATUITO!!!
          </h3>
        </div>
      </div>

      <div className="row expert-container p-md-3">
        <div className="row expert-container2">
          <div className="col-md-6 expert-content">
            <h3>LEONARDO VELOSO</h3>
            <p>
              Sou treinador do Veloso Team, meu time de consultoria online.
              Tenho meu Instagram (@leoo.veloso) e YouTube, onde compartilho
              muita informação sobre treinamento e nutrição, assim como também a
              minha rotina, para motivar e ajudar todos os meus seguidores.
            </p>
          </div>
          <div className="col-md-6 d-flex expert">
            <img src={expert} className="img-fluid expertImg" />
          </div>
        </div>
      </div>

      <div className="row footer">
        <button className="button mb-3" onClick={() => setIsModalVisible(true)}>
          INCREVA-SE AGORA NA SEMANA FLEXÍVEL
        </button>
        <span>Todos os direitos reservados.</span>
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal do App</h2>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;

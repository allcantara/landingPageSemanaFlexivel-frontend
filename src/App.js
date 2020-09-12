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
    <div className="corpo">
      <div className="row">
        <section className="header">
          <h3 className="bold title">
            Fique no shape comendo o que gosta
          </h3>
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/D4-XL1SsuYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <button
            className="button mb-5"
            onClick={() => setIsModalVisible(true)}
          >
            SIM!!! QUERO FICAR NO SHAPE COMENDO O QUE GOSTO!
          </button>
        </section>
      </div>

      <div className="row p-md-4 container-ebook">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold .title-container-ebook">
            Você, assim como eu, já teve ou está passando por
          </h3>
        </div>
        <div className="col-md-6 expert">
          <img src={expert} className="img-fluid expertImg" />
        </div>
        <p className="row text-container-ebook">
          péssimas experiências com dietas da moda super restritivas.
          Antigamente eu achava que só podia comer batata doce,
          frango e ovos, mas o grande problema é que eu odeio batata doce!
          E agora? Terei que comer o que não gosto ou não vou conseguir
          desenvolver meus músculos ou perder gordura??? Mas então,
          não é bem assim que funciona. Eu estudei muito e aprendi que esse
          não é o único caminho. Por isso fiz nesse livro coloquei todo meu
          conhecimento para encurtar o seu caminho no processo de
          perda de gordura ou ganho de massa, mostrando que é possível
          Ficar no Shape comendo o que gosta.

        </p>
      </div>

      <div className="row p-md-4 card-container">
        <div className="col-12 mt-3 mb-3 text-center">
          <h3 className="bold title-card">
            Com o meu ebook você aprenderá...
          </h3>
        </div>
        <div className="col"></div>
        <Cards />
        <div className="col"></div>
      </div>

      <div className="row p-md-4">
        
      </div>
    </div>
  );
}

export default App;

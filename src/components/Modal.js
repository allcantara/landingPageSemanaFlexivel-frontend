import React, { useState } from "react";
import { Message } from "../utils/Message";
import { api } from "../api";
import { ERROR, SUCCESS, WARNING } from "../utils/variant";

const Modal = ({ id = "modal", onClose = () => { }, children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [active, setActive] = useState(true)

  const message = new Message();

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      setActive(false)
      const { status } = await api.post("/users", {
        name,
        email,
        telephone,
      });

      if (status === 203) {
        message.showMessage("Este e-mail já foi cadastrado!", WARNING);
        setActive(true)
        return;
      }

      if (status === 200) {
        message.showMessage("Cadastro realizado com sucesso!", SUCCESS);
        setTimeout(() => {
          window.location.href =
            "https://chat.whatsapp.com/JU0PAUbfRueHHCOi2EokaR";
        }, 2000);
      }
    } catch (error) {
      message.showMessage("Falha ao cadastrar! Tente novamente.", ERROR);
    }

    setActive(true)
  };

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="close" onClick={onClose} />
        <form onSubmit={handleSave} className="modal-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu melhor email"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="DDD + Telefone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <button className="button mb-3 modal-button" type="submit" disabled={!active}>
            Inscrever
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from "notistack";

export class Message {
  constructor() {
    this.snack = {
      closeSnackbar: useSnackbar().closeSnackbar,
      enqueueSnackbar: useSnackbar().enqueueSnackbar,
    };
  }

  showMessage = (message, variant) => {
    this.snack.enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      }, // Localização em que a mensagem irá aparecer...
      action: (
        <button className="btn" onClick={() => this.snack.closeSnackbar()}>
          <FontAwesomeIcon color="#fff" icon={faWindowClose} />
        </button>
      ),
    });
  };
}
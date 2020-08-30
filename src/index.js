import React from "react";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <SnackbarProvider
    maxSnack={1}
    autoHideDuration={2000}
    dense={false}
    preventDuplicate={true}
    anchorOrigin={{ vertical: "center", horizontal: "center" }}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById("root")
);

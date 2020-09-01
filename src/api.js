import axios from "axios";

const api = axios.create({
  baseURL: "https://semanaflexivel.com.br/",
});

export { api }

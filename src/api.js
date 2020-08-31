import axios from "axios";

const api = axios.create({
  baseURL: "http://semanaflexivel-com-br.umbler.net/",
});

export { api }

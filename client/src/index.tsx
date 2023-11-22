import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
);

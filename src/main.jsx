import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers/Providers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
    </Providers>
    </BrowserRouter>
  </StrictMode>
);
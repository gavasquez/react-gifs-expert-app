import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifsExpertApp } from "./GifsExpertApp";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifsExpertApp />
  </StrictMode>
);

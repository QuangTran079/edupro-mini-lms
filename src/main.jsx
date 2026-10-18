import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./styles/NotFoundPage.css"
import "./styles/Header.css"
import "./styles/Footer.css"
import "./styles/Course.css"
import "./styles/CourseDetail.css"
import "./styles/Home.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

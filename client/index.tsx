import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { StrictMode } from "react";

import Dashboard from "./layouts/Dashboard";
import Projects from "./pages/Projects";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  </StrictMode>
);

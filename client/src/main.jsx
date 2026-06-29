import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/globals.css";

import AuthProvider from "./context/AuthContext";
import EnrollmentProvider from "./context/EnrollmentContext";
import ToastProvider from "./context/ToastContext";

import App from "./App.jsx";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>

    <BrowserRouter>

      <ToastProvider>

        <AuthProvider>

          <EnrollmentProvider>

            <App />

          </EnrollmentProvider>

        </AuthProvider>

      </ToastProvider>

    </BrowserRouter>

  </StrictMode>
);
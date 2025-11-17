import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserDetailsContextProvider } from "./Context/UserDetailsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserDetailsContextProvider>
      <App />
    </UserDetailsContextProvider>
  </StrictMode>
);

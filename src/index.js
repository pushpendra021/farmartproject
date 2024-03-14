import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-8qe0sc2c277kb8sj.us.auth0.com"
    clientId="4aJ21lEY2xdFkH05ZR8SzGhezDhveCjF"
       redirectUri={window.location.origin}>
    <AppProvider>
    <App />
    
  </AppProvider>
  </Auth0Provider>,
);

   
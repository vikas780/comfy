import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//Domain dev-cjw81cev.us.auth0.com
// client id XhfjNDredO3IiWa6pOjDv73jqMHETvec
//{process.env.REACT_APP_AUTH_DOMAIN}
//{process.env.REACT_APP_CLIENT_ID}
ReactDOM.render(
  <Auth0Provider
    domain="dev-cjw81cev.us.auth0.com"
    clientId="XhfjNDredO3IiWa6pOjDv73jqMHETvec"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

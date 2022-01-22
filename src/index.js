import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { render } from "react-dom";
import App from "./components/App";
import React from "react";

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

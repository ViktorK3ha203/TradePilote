import React from "react";
import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from "app/providers/ThemeProvider";
import { store } from "app/providers/StoreProvider/config/store";


render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { PublicRoute } from "./routes/route";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";

import "./App.css";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard/>
          <PublicRoute />
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;

import React from "react";
import Routes from "./src/Navigations/Routes";
import { Provider } from 'react-redux';
import store from "./src/Redux/store";

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

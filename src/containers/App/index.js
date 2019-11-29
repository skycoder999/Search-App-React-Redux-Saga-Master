import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../utils/store";
import AutoComplete from "../../components/AutoComplete";
import { API_SEARCH_PATH } from "../../utils/constants";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <header className="header">Movie Database</header>
      <div className="App">
        <AutoComplete path={API_SEARCH_PATH} />
      </div>
    </Provider>
  );
}

export default App;

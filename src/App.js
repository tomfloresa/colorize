import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";

// Reducers
import combineReducers from "./redux/reducers/combineReducers";

// Theme
import { theme } from "./theme.styled";

import AppContainer from "./AppContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(combineReducers)}>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

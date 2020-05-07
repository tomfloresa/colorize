import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Reducers
import combineReducers from "./redux/reducers/combineReducers";

// Theme
import { theme } from "./theme.styled";

// Components
import { Colors } from "./containers";

function App() {
  return (
    <Provider store={createStore(combineReducers)}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={Colors} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

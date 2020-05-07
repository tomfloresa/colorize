import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import { ShadowNotification } from "./components";

// Components
import { Colors } from "./containers";

import { toggleShadowNotification } from "./redux/actions";

class AppContainer extends React.Component {
  render() {
    const { shadowNotification } = this.props;

    console.log(shadowNotification);

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" component={Colors} />
          </Switch>
        </Router>
        <ShadowNotification
          isActive={shadowNotification.isActive}
          text={shadowNotification.text}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { shadowNotification } = state;

  return { shadowNotification };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleShadowNotification,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

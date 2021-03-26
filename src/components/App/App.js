import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome } from "../../routes";
import { connect } from "react-redux";
import { createAction } from "../../actions";
import { FETCH_CREDENTIALS } from "../../actions/types";
import ScrollToTop from "./ScrollToTop";
class App extends Component {
  _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    if (credentialsStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr))
      );
    }
  };
  componentDidMount() {
    this._getCredentialFromLocal();
  }
  render() {
    const showItem = (routes) => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              component={item.component}
            />
          );
        });
      }
    };
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>{showItem(routesHome)}</Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);

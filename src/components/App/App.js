import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome } from "../../routes";

function App() {
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
        <Switch>{showItem(routesHome)}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

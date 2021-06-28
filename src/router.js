import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routerList from "./routesList";

export default function Router() {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <Switch>
            {routerList.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact
              />
            ))}
          </Switch>
        )}
      />
    </BrowserRouter>
  );
}

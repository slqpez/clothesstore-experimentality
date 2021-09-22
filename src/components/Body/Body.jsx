import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ProductsPage from "../../pages/ProductsPage/ProductsPage"

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/products">
        <ProductsPage />
        </Route>
        <Route exact path="/products/:search">
          <ProductsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;

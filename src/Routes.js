import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreListContainer from "./Containers/StoreListContainer";
import ItemDetailsContainer from "./Containers/ItemDetailsContainer";
import CartContainer from "./Containers/CartContainer";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/products/:id" render={rtProps => <ItemDetailsContainer {...rtProps} />} />
        <Route exact path="/cart" render={rtProps => <CartContainer {...rtProps} />} />
        <Route exact path="/" render={() => <StoreListContainer />} />
      </Switch>
    )
  }
}

export default Routes;
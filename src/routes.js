import React from "react";
import { Switch, useLocation, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../src/Components/Styles/animation.css";

import Home from "../src/Components/pages/Home";
import Cardapio from "../src/Components/pages/Cardapio";
import Cadastro from "./Components/pages/Cadastro";
import Pedido from "./Components/pages/Pedido"

import { isAuthenticated } from "./Services/auth";

 

export default function Routes() {
  const location = useLocation();
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  console.log(PrivateRoute)
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/Cardapio" exact component={Cardapio} />
          <Route path="/Cadastro" exact component={Cadastro} />
          <Route path="/Pedido" exact component={Pedido} />
        </Switch>
  
      </CSSTransition>
    </TransitionGroup>
  );
}

import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default router;

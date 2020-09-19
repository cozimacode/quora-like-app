import React from "react";
import { Header, Homepage, Answer, Spaces, Notifications } from "./components";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="qla-main">
      <Header />
      <div className="qla-content">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/answer" component={Answer} />
          <Route exact path="/spaces" component={Spaces} />
          <Route exact path="/notifications" component={Notifications} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

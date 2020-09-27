import React, { useContext } from "react";
import { Header, Homepage, Answer, Spaces, Notifications } from "./components";
import { Route, Switch } from "react-router-dom";
import { MainContext } from "./context/MainContext";
import Modal from "./components/utilities/Modal";
import "./App.css";

function App() {
  const { isOverlayActive, isModalActive } = useContext(MainContext);

  return (
    <>
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
      {isModalActive && <Modal />}
      <div className={isOverlayActive ? "qla-overlay active" : "qla-overlay"} />
    </>
  );
}

export default App;

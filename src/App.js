import React from "react";
import "./App.css";
import Header from "./pages/header";
import Dashboard from "./pages/dashboard";
import { Switch, Route } from "react-router-dom";
import InfoView from "./pages/infoView";
import RenderNotFound from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/info/:stockNumber" component={InfoView} />
        <Route path="*" component={RenderNotFound} />
      </Switch>
    </div>
  );
}

export default App;

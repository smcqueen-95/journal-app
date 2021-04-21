// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Loading } from "./components";
import { Home, Profile, JournalEntries, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";
import CreateEntry from "./views/create-entry";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <ProtectedRoute path="/journal-entries" component={JournalEntries} />
          <ProtectedRoute path="/create-entry" component={CreateEntry} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

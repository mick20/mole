import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import {render} from "react-dom";
import FastClick from "fastclick";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import IdeasPage from "./pages/ideas";
import NoteEditPage from "./pages/notes/edit";
import NoteViewPage from "./pages/notes/edit";
import TodoListPage from "./pages/todolist";
import SettingsPage from "./pages/settings";

function startApp() {
  var routes = (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute name="notes" component={HomePage}>
          <Route path="/edit/:id" component={NoteEditPage}/>
          <Route path="/view/:id" component={NoteViewPage}/>
        </IndexRoute>
        <Route name="ideas" path="/ideas" component={IdeasPage}/>
        <Route name="todolist" path="/todolist" component={TodoListPage}/>
        <Route name="settings" path="/settings" component={SettingsPage}/>
        <Route path="*" component={ErrorPage}/>
      </Route>
    </Router>
  );

  render(routes, document.getElementById('container'));

  FastClick.attach(document.body);
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

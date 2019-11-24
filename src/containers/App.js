import React from "react";
import FetchCat from "./FetchCat";
import FetchCats from "./FetchCats";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { fetchCats, fetchCat } from "../actions";
import { connect } from "react-redux";
import "../css/style.css";
// material UI library
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy
              style={{ fontSize: "20px" }}
              variant="title"
              color="inherit"
            >
              Cats Images
            </TypoGraphy>
            <div className="navbar">
              <Link to="/" onClick={() => props.fetchCat()}>
                FetchCat
              </Link>
              <Link to="/FetchCats" onClick={() => props.fetchCats()}>
                FetchCats
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={FetchCat}></Route>
          <Route path="/FetchCats" exact component={FetchCats}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state,
    fetchCats,
    fetchCat
  };
};
export default connect(mapStateToProps, { fetchCats, fetchCat })(App);

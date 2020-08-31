import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Home from "views/HomePage/HomePage.js";

const AuthRoute = props => {
  const { isAuthUser, type } = props;
  if (type === "guest" && isAuthUser) return <Redirect to="/home" component={Home}/>;
  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);
/*!

=========================================================
* Don't Panic Just Cook - v1.0.0
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import EventsPage from "views/EventsPage/EventsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import Home from "views/HomePage/HomePage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import AuthRoute from './AuthRoute';
import EventSummary from 'views/EventsPage/Sections/EventSummary';

var hist = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/about-us" component={AboutUsPage} />
                    <Route path="/blog-post" component={BlogPostPage} />
                    <Route path="/blog-posts" component={BlogPostsPage} />
                    <Route path="/components" component={withRouter(ComponentsPage)} />
                    <Route path="/contact-us" component={ContactUsPage} />
                    <Route path="/ecommerce-page" component={EcommercePage} />
                    <Route path="/landing-page" component={LandingPage} />
                    <AuthRoute path="/login-page" component={LoginPage} type="guest" exact />
                    <Route path="/pricing" component={PricingPage} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route path="/product-page" component={ProductPage} />
                    <Route path="/sections" component={SectionsPage} />
                    <Route path="/shopping-cart-page" component={ShoppingCartPage} />
                    <Route path="/signup-page" component={SignupPage} />
                    <Route path="/error-page" component={ErrorPage} />
                    <Route path="/events-page" component={EventsPage} />
                    <Route path="/event/:id" component={withRouter(EventSummary)} type="private" exact />
                    <AuthRoute path="/home" component={withRouter(Home)} type="private" exact />
                    <AuthRoute path="/" component={withRouter(Home)} type="guest" />
                </Switch>
            </Router>
        )
    }
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Call from "@material-ui/icons/Call";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

// redux
import { connect } from 'react-redux';

import dg1 from "assets/img/vegan_1.jpg";
import dg2 from "assets/img/vegan_2.jpg";
import dg3 from "assets/img/vegan_3.jpg";

import { signOut } from '../../../store/actions/authActions';

const useStyles = makeStyles(headersStyle);

function SectionHeaders({ ...props }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const { auth } = props;
  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...props}>
      <div id="headersection" />
      {/* HEADER START */}
      <div>
        <Header
          absolute
          brand="Don't Panic! Just Cook"
          color="transparent"
          links={
            auth.uid ?
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/events-page">Events</Link>
                </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink}
                    onClick={props.signOut}
                    color="transparent"
                  >
                    Log Out
                </Button>
                </ListItem>
                {/* <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <Link to="/signup-page">SignUp</Link>
                </Button>
              </ListItem> */}
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link
                      to="/contacts"
                      className={classes.dropdownLink}
                      onClick={e => smoothScroll(e, "contacts")}
                    >
                      <Call className={classes.dropdownIcons} /> Contact Us
                    </Link>
                  </Button>
                </ListItem>
              </List>
              :
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/login-page"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/login-page">Login</Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href=""
                    color={window.innerWidth < 960 ? "info" : "white"}
                    target="_blank"
                    className={classes.navButton}
                    round
                  >
                    <AccountCircleIcon className={classes.icons} />
                    <Link to="/signup-page">Sign Up</Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link
                      to="/contacts"
                      className={classes.dropdownLink}
                      onClick={e => smoothScroll(e, "contacts")}
                    >
                      <Call className={classes.dropdownIcons} /> Contact Us
                    </Link>
                  </Button>
                </ListItem>
              </List>
          }
        />
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Spread the joy of Vegan cooking</h1>
                    <h4>
                      Don't Panic! Just Cook brings amazing plant-based dishes, taught to you live, right into your kitchen, for virtually hosted interactive cooking experiences!
                    </h4>
                    <br />
                    <Button color="danger" size="lg">
                      Read more
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-get-pocket" />
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Hosting live events, via video chat.</h1>
                    <h4>
                      Just connect to our events with your smartphone or laptop and enjoy our interactive, improvised, and most of all fun cooking experiences.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>Spicy Chinese Eggplant with Szechuan Sauce</h1>
                    <h4>
                      with chilies and peanuts– serve or black rice or rice noodles for a tasty, easy vegan dinner!
                    </h4>
                    <br />
                    <div>
                      {/* <Button color="white" simple size="lg">
                        <Share /> Share Offer
                      </Button> */}
                      <Button color="danger" size="lg">
                        <AccountCircleIcon /> SignUp now
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div>
      {/* HEADER END */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeaders)

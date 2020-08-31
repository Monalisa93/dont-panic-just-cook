/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/EventsPage/Sections/SectionDescription.js";
import SectionAddEvent from "views/EventsPage/Sections/SectionAddEvent.js";
import SectionEvents from "views/EventsPage/Sections/SectionEvents.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const useStyles = makeStyles(aboutUsStyle);

function EventsPage({ ...props }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Don't Panic! Just Cook"
        // links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Your creations</h1>
              <h4>
                Show your creativity to the world by adding delicious mouth-watering recipes!
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionAddEvent />
          <SectionEvents events={props.events}/>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href=""
                    className={classes.block}
                    target="_blank"
                  >
                    Don't Panic! Just Cook
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href=""
                    className={classes.block}
                    target="_blank"
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href=""
                    className={classes.block}
                    target="_blank"
                  >
                    Blog
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href=""
                target="_blank"
              >
                Don't Panic! Just Cook Team
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'events', orderBy: ['createdAt', 'desc'], where: [['authorId', '==', 'BdDyHQu33VbT6TfLYEpx2qzyQa82']] }
  ])
)(EventsPage)

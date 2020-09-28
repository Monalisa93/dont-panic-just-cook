import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VideoCall from "@material-ui/icons/VideoCall";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Offerings</h2>
          <h5 className={classes.description}>
            Our goal is to spread the joy of cooking, socializing, and loving life! Palo Alto Diet. brings amazing plant-based dishes, taught to you live, right into your kitchen, for virtually hosted interactive cooking experiences!
          </h5>
          {/*<h4 className={classes.description}>*/}
          {/*  We will be hosting our events live, via video chat. Just connect to our events with your smartphone or laptop and enjoy our interactive, improvised, and most of all fun cooking experiences.*/}
          {/*</h4>*/}
          {/*<h4 className={classes.description}>*/}
          {/*  Our goal is to build out a strong online community of plant-based cooks who wish to teach and/or learn healthy recipes.*/}
          {/*</h4>*/}
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How it works</h2>
          <h5 className={classes.description}>
            All you need is a smartphone or laptop live experiences are small 5-7people (unless otherwise specified). You can also request for a private class with just your friends, family, kids or with your work team.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 1"
              description="Sign up for one of our cooking events or request an event."
              icon={AccountCircle}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 2"
              description="Buy all the necessary ingredients (if you don't have them all no stress! Just ask the chef what to do!)"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step 3"
              description="Just use the Zoom link provided in the event details with your laptop, phone or tablet, meet your chef and other guests and start cooking."
              icon={VideoCall}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

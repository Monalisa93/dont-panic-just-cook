import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import WatchLater from "@material-ui/icons/WatchLater";
import VideoCall from "@material-ui/icons/VideoCall";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import vegan_6 from "assets/img/sections/vegan_6.jpg";

const useStyles = makeStyles(featuresStyle);
const projectsStyles = makeStyles(projectsStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  const projectClasses = projectsStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Our Offerings</h2>
              <h5 className={classes.description}>
                Our goal is to spread the joy of cooking, socializing, and loving life! Don't Panic! Just Cook. brings amazing plant-based dishes, taught to you live, right into your kitchen, for virtually hosted interactive cooking experiences!
              </h5>
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
        {/* Feature 2 START */}
        <div className={projectClasses.projects + " " + projectClasses.projects4}>
          <div className={projectClasses.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  projectClasses.mlAuto + " " + projectClasses.mrAuto + " " + projectClasses.textCenter
                }
              >
                <h2 className={projectClasses.title}>
                 How it works
              </h2>
                <h5 className={projectClasses.description}>
                  All you need is a smartphone or laptop live experiences are small 5-7people (unless otherwise specified). You can also request for a private class with just your friends, family, kids or with your work team.
              </h5>
                <div className={projectClasses.sectionSpace} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={projectClasses.mlAuto}>
                <Card
                  background
                  className={projectClasses.card4}
                  style={{ backgroundImage: `url(${vegan_6})` }}
                >
                  <CardBody background className={projectClasses.cardBody4}>
                    <a href="#pablo" onClick={e => e.preventDefault}>
                      <h3 className={projectClasses.cardTitle}>Go Vegan!</h3>
                      <p className={projectClasses.cardDescription}>
                        Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
                <InfoArea
                  className={projectClasses.info4}
                  icon={AccountCircle}
                  title="Step 1"
                  description="Sign up for one of our cooking events or request an event."
                  iconColor="danger"
                />
                <InfoArea
                  className={projectClasses.info4}
                  icon={VerifiedUser}
                  title="Step 2"
                  description="Buy all the necessary ingredients (if you don't have them all no stress! Just ask the chef what to do!)"
                  iconColor="success"
                />
                <InfoArea
                  className={projectClasses.info4}
                  icon={WatchLater}
                  title="Step 3"
                  description="Just use the Zoom link provided in the event details with your laptop, phone or tablet"
                  iconColor="info"
                />
                <InfoArea
                  className={projectClasses.info4}
                  icon={VideoCall}
                  title="Step 4"
                  description="Meet your chef online and start cooking!"
                  iconColor="success"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Feature 2 END */}
      </div>
    </div>
  );
}

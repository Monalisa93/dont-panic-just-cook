import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
// event card component
import EventCard from './EventCard';

const useStyles = makeStyles(styles);

export default function SectionOffice(props) {
  const { events } = props;
  const recipes = events || [];
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={7} md={7}>
            <div className={classes.title}>
              <h2>Your Added recipes</h2>
              <h4>Explore your added recipes here!</h4>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {recipes.map((event, index) => {
            return (
              <GridItem xs={12} sm={4} md={4}>
                <EventCard event={event} />
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}

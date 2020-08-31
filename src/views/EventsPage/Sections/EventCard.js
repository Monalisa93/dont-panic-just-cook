import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import color1 from "assets/img/vegan_3.jpg";

const useStyles = makeStyles(styles);

const EventCard = ({ event }) => {
  const classes = useStyles();
  return (
    <Card blog>
      <CardHeader image>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={color1} alt="..." />
        </a>
        <div
          className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${color1})`,
            opacity: "1"
          }}
        />
      </CardHeader>
      <CardBody>
        <Warning>
          <h6 className={classes.cardCategory}>{event.name}</h6>
        </Warning>
        <h4 className={classes.cardTitle}>
          <Link to={{
            pathname: `event/${event.id}`,
            event
          }}>
            {event.description}
          </Link>
        </h4>
        <h6>{moment(event.createdAt.toDate()).calendar()}</h6>
        <h6>{event.authorFirstName}</h6>
      </CardBody>
    </Card>
  )
}

export default EventCard;
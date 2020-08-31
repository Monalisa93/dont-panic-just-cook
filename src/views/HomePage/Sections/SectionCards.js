import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
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

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";
// event card
import EventCard from '../../EventsPage/Sections/EventCard';
// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const useStyles = makeStyles(styles);

export default function SectionCards({ ...rest }) {
  const recipes = rest.events || [];
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.sectionGray}>
        {/* MORPHING CARDS START */}
        {/* <div id="morphingCards">
          <div className={classes.container}>
            <div className={classes.title}>
              <h2>Morphing Cards</h2>
              <h3>Rotating Cards</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card background className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: `url(${cardBlog5})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Full Background Card
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            This Background Card Will Rotate on Hover
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: `url(${cardBlog5})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                          As an Admin, you have shortcuts to edit, view or
                          delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                          <Button round justIcon color="danger">
                            <Delete />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper" />
                            TechCrunch
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            This Card is Doing a Full Rotation on Hover...
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="twitter">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="dribbble">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="facebook">
                            <i className="fab fa-facebook" />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperRose}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <i className="fab fa-dribbble" /> Dribbble
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {'"'}Dribbble just acquired Crew, a very interesting
                            startup...{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className={classes.authorWhite}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              src={avatar}
                              alt="..."
                              className={
                                classes.imgRaised + " " + classes.avatar
                              }
                            />
                            <span>Tania Andrew</span>
                          </a>
                        </div>
                        <div
                          className={classes.statsWhite + " " + classes.mlAuto}
                        >
                          <Favorite />
                          2.4K ·
                          <Share />
                          45
                        </div>
                      </CardFooter>
                    </div>
                    <div className={classes.back + " " + classes.wrapperRose}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <i className="fab fa-dribbble" /> Dribbble
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {'"'}Dribbble just acquired Crew, a very interesting
                            startup...{'"'}
                          </a>
                        </h4>
                        <div>
                          <Button round color="white">
                            <Subject /> Read
                          </Button>
                          <Button simple color="white">
                            <Bookmark /> Bookmark
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>Manual Rotating Cards</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate1
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper" /> Manual Rotating
                            Card
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {'"'}This card is doing a full rotation, click on
                            the rotate button{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="success"
                            onClick={() =>
                              setActiveRotate1(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="twitter">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="dribbble">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="facebook">
                            <i className="fab fa-facebook" />
                          </Button>
                        </div>
                        <br />
                        <Button link onClick={() => setActiveRotate1("")}>
                          <Refresh /> Back...
                        </Button>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate2
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{ backgroundImage: `url(${cardBlog6})` }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Full Background Card
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            This card is doing a full rotation, click on the
                            rotate button
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="danger"
                            onClick={() =>
                              setActiveRotate2(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{ backgroundImage: `url(${cardBlog6})` }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                          As an Admin, you have shortcuts to edit, view or
                          delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                          <Button round justIcon color="danger">
                            <Delete />
                          </Button>
                          <br />
                          <br />
                          <Button
                            round
                            color="danger"
                            onClick={() => setActiveRotate2("")}
                          >
                            <Refresh /> Back...
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate3
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={classes.front + " " + classes.wrapperWarning}
                    >
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <Receipt /> Manual Rotating Card
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {'"'}This card is doing a full rotation, click on
                            the rotate button{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="white"
                            onClick={() =>
                              setActiveRotate3(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperWarning}
                    >
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Do more...</h5>
                        <p className={classes.cardDescriptionWhite}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="white">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-facebook" />
                          </Button>
                          <br />
                          <br />
                          <Button
                            round
                            color="white"
                            onClick={() => setActiveRotate3("")}
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div> */}
        {/* MORPHING CARDS END */}
        {/* DYNAMIC COLORED SHADOWS START */}
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={7} md={7}>
              <div className={classes.title}>
                <h2>My Creations</h2>
                <h4>
                The best Lorem Ipsum Generator in all the sea! 
                Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! 
                Configure above, then get yer pirate ipsum...own the high seas, arg!
                </h4>
                <br />
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
        {/* DYNAMIC COLORED SHADOWS END */}
      </div>
    </div>
  );
}


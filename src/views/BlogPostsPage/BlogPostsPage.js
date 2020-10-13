/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./Sections/SectionPills.js";
import SectionInterested from "./Sections/SectionInterested.js";
import SectionImage from "./Sections/SectionImage.js";
import SubscribeLine from "./Sections/SubscribeLine.js";

// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

function BlogPostsPage({ ...props }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Palo Alto Diet"
        // links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                Market research and study
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionInterested {...props}/>
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
                    target="_blank"
                    className={classes.block}
                  >
                    Palo Alto Diet
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href=""
                    target="_blank"
                    className={classes.block}
                  >
                    About us
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
                Palo Alto Team
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
    blogs: state.firestore.ordered.blogs
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props, store) => [
    { collection: 'blogs' }
  ])
)(BlogPostsPage)



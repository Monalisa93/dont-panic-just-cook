import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";
import Button from "components/CustomButtons/Button.js";

import bg5 from "assets/img/bg5.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

import { createBlog } from "../../../store/actions/blogActions";
import CustomInput from "components/CustomInput/CustomInput.js";

import { connect } from "react-redux";

const useStyles = makeStyles(sectionInterestedStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function SectionInterested({ ...props }) {
  const { blogs } = props || [];
  const recipes = blogs || [];
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [values, setValues] = React.useState({ title: "", description: "", tag: "", link: "" });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBlog(values);
    // window.location.reload();
  };
  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>Our posts</h3>
      <br />
      <GridContainer>
        <GridItem>
          <Button block onClick={() => setClassicModal(true)}>
            <LibraryBooks />
            Add Post
          </Button>
          <Dialog
            classes={{
              root: classes.modalRoot,
              paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setClassicModal(false)}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle}>Add blog</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <p>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CustomInput
                    id="title"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.inputAdornment}
                        ></InputAdornment>
                      ),
                      placeholder: "Blog Title",
                      label: "Blog Title",
                      onChange: handleInputChange,
                    }}
                  />
                  <CustomInput
                    id="description"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.inputAdornment}
                        ></InputAdornment>
                      ),
                      placeholder: "Description...",
                      onChange: handleInputChange,
                      multiline: true,
                      rows: 2,
                    }}
                  />
                  <CustomInput
                    id="tag"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.inputAdornment}
                        ></InputAdornment>
                      ),
                      placeholder: "Tag...",
                      onChange: handleInputChange
                    }}
                  />
                  <CustomInput
                    id="link"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.inputAdornment}
                        ></InputAdornment>
                      ),
                      placeholder: "Link",
                      onChange: handleInputChange
                    }}
                  />
                </form>
              </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button link onClick={(e) => handleSubmit(e)}>
                Add Blog
              </Button>
              <Button
                onClick={() => setClassicModal(false)}
                color="danger"
                simple
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {recipes.map((blog) => {
          return (
            <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
              <Card plain blog>
                <CardHeader image plain>
                  <a href={blog.link} target="_blank">
                    {blog.link}
                  </a>
                </CardHeader>
                <CardBody plain>
                  <Info>
                  <h6>{blog.tag}</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">
                      {blog.title}
                    </a>
                  </h4>
                  <p className={classes.description}>
                    {blog.description}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog)),
  };
};

export default connect(null, mapDispatchToProps)(SectionInterested);

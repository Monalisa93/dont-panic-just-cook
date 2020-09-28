import React from "react";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import { updateEvent } from "../../../store/actions/eventActions";

import vegan_1 from "assets/img/vegan_1.jpg";
import { connect } from "react-redux";

const useStyles = makeStyles(blogsStyle);

const EventSummary = ({ ...props }) => {
  const classes = useStyles();
  const { event } = props.location;
  const [values, setValues] = React.useState({ 
    name: event.name, 
    description: event.description,
    serves: event.serves,
    prepTime: event.prepTime,
    ingredients: event.ingredients
   });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    values.id = event.id;
    props.updateEvent(values);
    props.history.push('/events-page');
  };
  return (
    <div className="cd-section" {...props}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Recipe Details</h2>
              <Card plain className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito">
                    <img src={vegan_1} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${vegan_1})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>My Creations</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo">{props.location.event.name}</a>
                  </h3>
                  <h5 className={classes.description}>
                    {moment(props.location.event.createdAt.toDate()).calendar()}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem md={12} sm={12}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <CustomInput
                  id="name"
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
                    placeholder: "Recipe Name",
                    label: "Recipe Name",
                    onChange: handleInputChange,
                    defaultValue: event.name
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
                    rows: 5,
                    defaultValue: event.description
                  }}
                />
                <div className={classes.inlineBlock}>
                  <h5>This recipe serves:</h5>
                  <CustomInput
                    id="serves"
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
                      placeholder: "4 adults, 2 adults 2 children etc.",
                      onChange: handleInputChange,
                      defaultValue: event.serves
                    }}
                  />
                </div>
                <div className={classes.inlineBlock}>
                  <h5>Prep Time:</h5>
                  <CustomInput
                    id="prepTime"
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
                      placeholder: "15 mins, 1 hr 30 mins...",
                      onChange: handleInputChange,
                      defaultValue: event.prepTime
                    }}
                  />
                </div>
                <div className={classes.inlineBlock}>
                  <h5>Ingredients:</h5>
                  <CustomInput
                    id="ingredients"
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
                      placeholder: "List of items needed for the recipe",
                      onChange: handleInputChange,
                      multiline: true,
                      rows: 5,
                      defaultValue: event.ingredients
                    }}
                  />
                </div>
                <ImageUpload avatar />
                <div className={classes.textCenter}>
                  <Button round color="primary" type="submit">
                    Update Recipe
                  </Button>
                </div>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEvent: (event) => dispatch(updateEvent(event)),
  };
};

export default connect(null, mapDispatchToProps)(EventSummary);

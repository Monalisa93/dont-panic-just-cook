import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

// redux
import { connect } from 'react-redux';
import { createEvent } from '../../../store/actions/eventActions';

const useStyles = makeStyles(teamStyle);

function SectionAddEvent({ ...props }) {
    const classes = useStyles();
    const [values, setValues] = React.useState({ name: '', description: '' });
    const handleInputChange = e => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.createEvent(values);
        // props.history.push('/');
    }
    return (
        <div className={classes.team}>
            <GridContainer>
                <GridItem
                    md={8}
                    sm={8}
                    className={classNames(
                        classes.mrAuto,
                        classes.mlAuto,
                        classes.textCenter
                    )}
                >
                    <h2 className={classes.title}>Add a new recipe here</h2>
                    <h5 className={classes.description}>
                        This is the paragraph where you can write more details about the steps to create recipes and organize them.
          </h5>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem md={12} sm={12}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <CustomInput
                            id="name"
                            formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                            }}
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        className={classes.inputAdornment}
                                    >
                                    </InputAdornment>
                                ),
                                placeholder: "Recipe Name...",
                                onChange: handleInputChange
                            }}
                        />
                        <CustomInput
                            id="description"
                            formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                            }}
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        className={classes.inputAdornment}
                                    >
                                    </InputAdornment>
                                ),
                                placeholder: "Description...",
                                onChange: handleInputChange
                            }}
                        />
                        <div className={classes.textCenter}>
                            <Button round color="primary" type="submit">
                                Add Recipe
                          </Button>
                        </div>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(SectionAddEvent)

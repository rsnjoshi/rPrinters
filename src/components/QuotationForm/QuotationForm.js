import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./QuotationForm.module.css";
import Stepper from "../../components/UI/Stepper/Stepper";
import Aux from "../../hoc/Aux";

class QuotationForm extends Component {
  render() {
    return (
      <Aux>
        <Grid item xs={12} className={classes.QuotationForm}>
          <Paper className={classes.StepperPaper} square elevation={7}>
            <Stepper />
          </Paper>
        </Grid>
      </Aux>
    );
  }
}

export default QuotationForm;

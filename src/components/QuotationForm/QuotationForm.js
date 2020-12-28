import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./QuotationForm.module.css";
import Stepper from "../../components/UI/Stepper/Stepper";
import Aux from "../../hoc/Aux";

class QuotationForm extends Component {
  state = {
    itemName: null,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let item = null;
    for (let param of query.entries()) {
      if (param[0] === "item") {
        item = param[1];
      } else {
        item = "No Item selected";
      }
    }
    this.setState({
      itemName: item,
    });
  }
  render() {
    return (
      <Aux>
        <Grid item xs={12} className={classes.QuotationForm}>
          <Paper className={classes.StepperPaper} square elevation={7}>
            <Stepper itemName={this.state.itemName} />
          </Paper>
        </Grid>
      </Aux>
    );
  }
}

export default QuotationForm;

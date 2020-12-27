import React, { useState } from "react";
import {
  Stepper as FormStepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";
import classes from "./Stepper.module.css";
import { Button, Paper, Typography } from "@material-ui/core";
// import { Switch } from "@material-ui/core";
import Design from "./Design/Design";
import Dimension from "./Dimension/Dimension";
import Aux from "../../../hoc/Aux";

const Stepper = (props) => {
  const steps = ["Design", "Dimension", "Quantity", "Customer Info"];
  const [activeStep, setActiveStep] = useState(0);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return "helo";
      // return <Design />;
      case 1:
        return <Dimension />;
      case 2:
        return `Insert here with necessary form items`;
      case 3:
        return `Insert here with necessary form items`;
      default:
        return "Unknown step";
    }
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Aux>
      <Typography align="center" variant="h5">
        Quotation for {props.itemName}
      </Typography>
      <FormStepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </FormStepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </Aux>
  );
};

export default Stepper;

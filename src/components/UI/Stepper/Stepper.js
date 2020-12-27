import React, { useState } from "react";
import {
  Stepper as FormStepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";
import classes from "./Stepper.module.css";
import { Button, Paper, Typography } from "@material-ui/core";
import Aux from "../../../hoc/Aux";

const Stepper = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [activeStep, setActiveStep] = useState(0);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
      case 1:
        return "An ad group contains one or more ads which target a shared set of keywords.";
      case 2:
        return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
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

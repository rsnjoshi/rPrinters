import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import { Grid, Typography, Paper } from "@material-ui/core";

export class Intro extends Component {
  render() {
    return (
      <Aux>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h3">Welcome to Ratna Printers</Typography>
          </Paper>
        </Grid>
      </Aux>
    );
  }
}

export default Intro;

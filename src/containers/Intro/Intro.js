import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import classes from "./Intro.module.css";

export class Intro extends Component {
  render() {
    const items = [
      {
        name: "Envelops",
        description: "High Quality Envelops",
        source: "images/envelope.jpeg",
        color: "orchid",
      },
      {
        name: "Paper Boxs",
        description: "Large Variety of customized Box",
        source: "images/boxes.jpeg",
        color: "white",
      },
      {
        name: "Paper Bags",
        description: "Attractive and portable paper bags",
        source: "images/paper_bag_sample.jpeg",
        color: "gold",
      },
    ];
    return (
      <Aux>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Carousel
              className={classes.carouselPointer}
              autoPlay={true}
              indicators={false}
              animation={"fade"}
              timeout={500}
              interval={5000}
            >
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Paper>
        </Grid>
      </Aux>
    );
  }
}

export default Intro;

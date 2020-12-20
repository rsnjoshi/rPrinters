import React, { Component } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import classes from "./ProductList.module.css";
import Aux from "../../hoc/Aux";

class ProductList extends Component {
  state = {
    itemList: ["Bag", "Envelope", "Box"],
  };
  render() {
    const cardList = this.state.itemList.map((cardItem, index) => (
      <Grid item xs={12} key={index}>
        <Card
          square
          className={classes.productCard}
          variant="outlined"
          elevation={0}
        >
          <CardContent>
            <Typography variant="h5">HEllo, I'm {cardItem}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ));

    return <Aux>{cardList}</Aux>;
  }
}

export default ProductList;

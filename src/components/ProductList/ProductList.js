import React, { Component } from "react";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
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
            <Grid
              item
              xs={4}
              direciton="column"
              className={classes.productDefination}
            >
              <Typography variant="h5">{cardItem}</Typography>
              <Button variant="outlined" color="primary">
                ORDER
              </Button>
            </Grid>
            <Grid item xs={8}>
              <div className={classes.productAnimation}></div>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ));

    return <Aux>{cardList}</Aux>;
  }
}

export default ProductList;

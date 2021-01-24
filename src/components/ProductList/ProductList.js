import React, { Component } from "react";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import classes from "./ProductList.module.css";
import { withRouter } from "react-router-dom";
import Aux from "../../hoc/Aux";
import MobileStepper from '../UI/Stepper/MobileStepper'

class ProductList extends Component {
  state = {
    itemList: ["Bag", "Envelope", "Box"],
    selectedItem: null,
  };

  setSelectedItem = (name) => {
    this.setState({
      selectedItem: name,
    });
  };

  onOrderClickHandler = (itemName) => {
    console.log("[ProductList.js] Order button clicked", this.props);
    console.log(itemName);
    // let queryString = itemName;
    this.props.history.push({
      pathname: "/quotation",
      search: "?item=" + itemName,
    });
    // let history = useHistory();
    // history.push("/quotation"); // use this approach in functional component
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
              <MobileStepper />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => this.onOrderClickHandler(cardItem)}
              >
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

export default withRouter(ProductList);

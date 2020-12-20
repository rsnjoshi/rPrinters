import { Component } from "react";
import { Paper, Button } from "@material-ui/core";
import classes from "./Intro.module.css";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className={classes.sliderText}>
          <h2 style={{ color: this.props.item.color }}>
            {this.props.item.name}
          </h2>
          <p style={{ color: this.props.item.color }}>
            {this.props.item.description}
          </p>
        </div>
        <img className={classes.sliderImage} src={this.props.item.source} />
      </div>
    );
  }
}

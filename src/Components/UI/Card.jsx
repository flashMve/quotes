import React, { Component, Fragment } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.card}>{this.props.children}</div>
        <div className={classes.author} >{this.props.author}</div>
      </Fragment>
    );
  }
}

export default Card;

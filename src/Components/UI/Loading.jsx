import React, { Component } from "react";
import classes from "./Loading.module.css";

class Loading extends Component {
  render() {
    return (
        <div class={classes.loader}></div>
    );
  }
}


export default Loading;
import React, { Component } from "react";
import classes from "./VideoFrame.module.scss"

export default class VideoFrame extends Component {
  render() {
    const { src, title, children, description } = this.props;
    return (
      <div className={classes.videoframe__block}>
        <iframe
          className={classes.video__frame}
          src={src}
          title={title}>
        </iframe>

        <div className={classes.frame__text__block}>
          <span className={classes.video__title}>{children}</span>
          <p className={classes.video__description}>{description}</p>
        </div>
      </div>
    );
  }
}


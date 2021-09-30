import React, { Component } from "react";
import classes from "./ListItem.module.scss"

export default class Preview extends Component {
  render() {
    const { id, src, alt, onClick, figcaptionValue } = this.props
    return (
      <figure className={classes.preview__block}>
        <img
          className={classes.preview__img}
          id={id}
          src={src}
          alt={alt}
          onClick={(event) => { onClick(event.target.id, event.target.alt) }} />

        <figcaption className={classes.preview__title}>{figcaptionValue}</figcaption>
      </figure>
    );
  }
}


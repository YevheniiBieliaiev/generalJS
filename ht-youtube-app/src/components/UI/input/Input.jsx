import React, { Component } from "react";
import classes from "./Input.module.scss"

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  async onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue)
  }

  render() {
    return (
      <form
        className={classes.form__wrapper}
        action=""
        onSubmit={(event) => this.onFormSubmit(event)}>

        <input
          className={classes.search__input}
          type="text"
          value={this.state.inputValue}
          placeholder="Enter you request"
          onChange={(event) => (this.setState({ inputValue: event.target.value }))}>
        </input>

        <input
          className={classes.search__button}
          type="submit"
          value="Search">
        </input>
      </form>
    )
  }
}
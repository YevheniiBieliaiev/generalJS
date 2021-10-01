import React, { Component } from "react";
import "../scss/main.scss";
import Input from "./UI/input/Input";
import VideoBlock from "./UI/videoblock/VideoBlock";
import { searchVideos } from "../api/youtube";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      startFrameURL: "",
      startFrameURLIframeTitle: "",
      startDescription: ""
    }
  }

  onSearchSubmit = async (query) => {
    const { data: { items } } = await searchVideos(query);
    this.setState({
      videos: items,
      startFrameURL: items[0].id.videoId,
      startFrameURLIframeTitle: items[0].snippet.description,
      startDescription: items[0].snippet.title
    })
  }

  render() {
    const { videos, startFrameURL, startFrameURLIframeTitle, startDescription } = this.state;
    return (
      <React.Fragment>
        <Input onSubmit={this.onSearchSubmit} />
        <VideoBlock
          videos={videos}
          startFrameURL={startFrameURL}
          startFrameURLIframeTitle={startFrameURLIframeTitle}
          startDescription={startDescription} />
      </React.Fragment>
    )
  }
}
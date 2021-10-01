import React, { Component } from "react";
import classes from "./VideoBlock.module.scss"
import { IFRAME_URL, previewImgUrl } from "../../../key&URL/APIkey";
import VideoFrame from "../videoframe/VideoFrame";
import Preview from "../listitem/ListItem";

export default class VideoBlock extends Component {
  constructor() {
    super();
    this.state = {
      iframeSrc: "",
      iframeTitle: "",
      description: ""
    }
  }

  onGetVideoID = (previewID, title) => {
    const chosenElem = this.props.videos.find(video => video.id.videoId === previewID);

    this.setState({
      iframeSrc: previewID,
      iframeTitle: title,
      description: chosenElem.snippet.description
    })
  }

  render() {
    return (
      <div className={classes.videoblock__wrapper}>
        <VideoFrame
          src={IFRAME_URL + (!(this.state.iframeSrc) ? this.props.startFrameURL : this.state.iframeSrc)}
          title="WatchTheVideo"
          children={(!(this.state.iframeTitle) ? this.props.startFrameURLIframeTitle : this.state.iframeTitle)}
          description={(!(this.state.description) ? this.props.startDescription : this.state.description)}
        >
        </VideoFrame>

        <div className={classes.videolist__wrapper}>
          {
            this.props.videos.map((video, index) =>
              <Preview
                key={index}
                id={video.id.videoId}
                src={previewImgUrl(video.id.videoId)}
                alt={video.snippet.title}
                onClick={this.onGetVideoID}
                figcaptionValue={video.snippet.title}
              />)
          }
        </div>
      </div>
    );
  }
}


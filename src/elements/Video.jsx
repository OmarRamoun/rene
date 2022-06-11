import React from "react";
import { videoTagString, VideoTag } from "react-video-tag";

videoTagString({
  src: "https://creativegigs.net/video/demo_01.mp4",
});

const Video = () => {
  return (
    <>
      <VideoTag
        autoPlay={`${true}`}
        muted={`${true}`}
        playsInline={`${true}`}
        loop={`${true}`}
        src={`${"https://creativegigs.net/video/demo_01.mp4"}`}
      />
    </>
  );
};

export default Video;

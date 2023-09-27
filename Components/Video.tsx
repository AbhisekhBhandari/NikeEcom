import React from "react";

const Video = ({source}:{source:string}) => {
  return (
    <video muted={true} loop={true} autoPlay={true} className=" w-full mx-auto ">
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;

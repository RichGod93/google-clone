/* eslint-disable @next/next/no-img-element */
import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      src={url}
      loading="lazy"
      alt="profile pic"
      className={`rounded-full cursor-pointer h-10 ${className}`}
    />
  );
}

export default Avatar;

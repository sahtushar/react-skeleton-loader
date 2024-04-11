import "./loader.css";

import React from "react";

function ContentLoader(props) {
  const { extraStyles, position } = props;

  return (
    <div
      className="loaderWrapper"
      style={{
        ...extraStyles,
        ...{
          position: position === "absolute" ? "absolute" : "relative",
        },
      }}
    >
      <div className="loaderAnimation"></div>
    </div>
  );
}

export default ContentLoader;

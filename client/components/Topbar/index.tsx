import React from "react";

export default function Topbar(): JSX.Element {
  return (
    <div
      className={
        "py-2 px-5 max-h-12 h-12 flex justify-between items-center border-b"
      }
      style={{
        borderColor: "#282828",
      }}
    ></div>
  );
}

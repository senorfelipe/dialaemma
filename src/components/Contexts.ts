/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export const DisplayImageContext = React.createContext({
  displayImage: "",
  backgroundColor: "#000000",
  setDisplayImage: (path: string) => {},
  setBackgroundColor: (color: string) => {},
});

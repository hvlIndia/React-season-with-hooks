import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
 const[lat, errorMassage] = useLocation();

  let content;
  if (errorMassage) {
    content = <div> Error: {errorMassage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="please accept location!" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

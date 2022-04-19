import * as React from "react";
import { useContext, useEffect } from "react";
import AppContext from "./AppContext";

function ClickCounterDisplay() {
  useEffect(() => { console.log('Executing ClickCounterDisplay function') });
  useEffect(() => { console.log('Mounting ClickCounterDisplay') }, []);
  const { clickCounter } = useContext(AppContext);

  return (
    <div>Number of clicks: {clickCounter}</div>
  )
}

export default ClickCounterDisplay;
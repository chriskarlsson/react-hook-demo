import * as React from "react";
import { memo, useEffect } from "react";

function Button(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> ) {
  useEffect(() => { console.log(`Executing '${(props.children?.valueOf()) || ''}' Button function`) });
  useEffect(() => { console.log(`Mounting '${(props.children?.valueOf()) || ''}' Button`) }, [props.children]);
  const { children } = props;
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default memo(Button);
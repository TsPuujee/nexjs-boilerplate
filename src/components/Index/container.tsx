import React from "react";

const Container = (props: {
    className?: string,
    children?: React.ReactNode
}) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;
import React from "react";

export default function Banner(props) {
  const classes = props.classes;
  if (props.render === true) {
    return (
      <div className={classes.bannerView}>
        <h3>{props.text}</h3>
      </div>
    );
  } else {
    return <></>;
  }
}

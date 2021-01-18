import React from "react";
import MovieList from "./MovieList";

export default function NominatedView(props) {
  const classes = props.classes;
  return (
    <div className={classes.view}>
      <h4 className={classes.headerTxt}>Nominations</h4>
      <MovieList
        classes={props.classes}
        movies={props.nominations}
        btnText="Remove"
        _clickHandler={props._clickHandler}
        _disableHandler={props._disableHandler}
      />
    </div>
  );
}

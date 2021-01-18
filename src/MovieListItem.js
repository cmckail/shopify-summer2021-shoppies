import React from "react";

export default function MovieListItem(props) {
  let disable = false;
  if (props._disableHandler !== null) {
    disable = props._disableHandler(props.movie.imdbID);
  }
  const classes = props.classes;
  return (
    <li>
      {props.movie.Title} {props.movie.Year}
      <button
        className={classes.viewBtn}
        onClick={() => props._clickHandler(props.movie.imdbID)}
        disabled={disable}
      >
        {props.btnText}
      </button>
    </li>
  );
}

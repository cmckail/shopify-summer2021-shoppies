import React from "react";
import MovieListItem from "./MovieListItem";
export default function MovieList(props) {
  const classes = props.classes;
  return (
    <div>
      <ul>
        {Object.entries(props.movies).map(([id, movie]) => (
          <MovieListItem
            classes={props.classes}
            movie={movie}
            btnText={props.btnText}
            _clickHandler={props._clickHandler}
            _disableHandler={props._disableHandler}
          />
        ))}
      </ul>
    </div>
  );
}

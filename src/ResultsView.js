import React from "react";
import MovieList from "./MovieList";
export default function ResultsView(props) {
  const classes = props.classes;
  //   if (props.error) {
  //     return (
  //       <div className={classes.view}>
  //         <h6>Invalid Search, Please Try Again</h6>
  //       </div>
  //     );
  //   } else
  if (Object.entries(props.results).length < 1) {
    return (
      <div className={classes.view}>
        <h4 className={classes.headerTxt}>Search Results</h4>
        <p className={classes.headerTxt}>
          Search for a movie, and press the enter key to see results here!
        </p>
      </div>
    );
  } else {
    return (
      <div className={classes.view}>
        <h4
          className={classes.headerTxt}
        >{`Results for ${props.searchTerm}`}</h4>
        <MovieList
          classes={props.classes}
          nominations={props.nominations}
          btnText="Nominate"
          movies={props.results}
          _clickHandler={props._clickHandler}
          _disableHandler={props._disableHandler}
        />
      </div>
    );
  }
}

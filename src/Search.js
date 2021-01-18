import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  const searchInput = useRef(null);
  const classes = props.classes;
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      props.handleSearch(e.target.value);
    }
  };
  return (
    <>
      <div className={classes.searchView}>
        <div className={classes.searchBarContainer}>
          <p>Movie Title</p>
          <div className={classes.searchBar}>
            <button className={classes.searchBtn} disabled>
              <SearchIcon />
            </button>
            <input
              className={classes.input}
              placeholder="Search…"
              aria-label="search"
              type="search"
              onKeyDown={handleEnter}
            />
          </div>
        </div>
      </div>
    </>
  );
}

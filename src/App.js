import "./App.css";
import "./Search";
import React, { useEffect, useState, useRef } from "react";
import Search from "./Search";
import ResultsView from "./ResultsView";
import NominatedView from "./NominatedView";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Banner from "./Banner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    padding: "30px",
    backgroundColor: "#E8E8E8",
    margin: "auto auto",
    marginTop: "20px",
  },
  view: {
    textAlign: "left",
    width: "100%",
    margin: "auto auto",
    backgroundColor: "white",
    minHeight: "200px",
    paddingBottom: "50px",
    overflow: "auto",
  },
  headerTxt: {
    margin: "5px 10px 5px 10px",
    paddingTop: "10px",
  },
  searchView: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    paddingBottom: "20px",
  },
  input: {
    width: "90%",
    height: "30px",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    display: "flex",
    margin: "auto",
  },
  searchBtn: {
    float: "left",
    width: "5%",
    height: "30px",
    border: "none",
    backgroundColor: "white",
    margin: "0",
    "&:hover": {
      background: "light-gray",
    },
  },
  viewBtn: {
    marginLeft: "10px",
  },
  searchBarContainer: {
    width: "95%",
    margin: "auto auto",
    padding: "5px 0 5px 0",
  },
  searchBar: {
    border: "1px solid black",
    display: "flex",
  },
  bannerView: {
    backgroundColor: "green",
    color: "white",
    padding: "5px",
    textAlign: "center",
  },
}));
function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState({});
  const [error, setError] = useState();
  const [nominated, setNominated] = useState({});
  const [nominationAmount, setNominationAmount] = useState(0);
  const [banner, setBanner] = useState(false);
  function disableBtn(id) {
    if (nominated[id]) {
      return true;
    } else {
      return false;
    }
  }

  function nominateMovie(id) {
    let movie = searchResults[id];
    if (nominationAmount == 5) {
      setBanner(true);
      return;
    } else if (movie) {
      setNominated({ ...nominated, [id]: movie });
      setNominationAmount((prevCount) => {
        let newCount = Number(prevCount) + 1;
        return newCount;
      });
    } else {
      console.log("error adding movie");
    }
  }

  function removeNomination(id) {
    let movie = searchResults[id];
    if (movie) {
      setNominated((prevN) => {
        const newN = { ...prevN };
        delete newN[id];
        return newN;
      });
      setNominationAmount((prevCount) => {
        let newCount = Number(prevCount) - 1;
        return newCount;
      });
      if (nominationAmount < 5) {
        setBanner(false);
      }
    }
  }
  function getSearchResults(term) {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=bae5ff4b&s=${term}&r=json&type=movie`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let movieDict = {};
          result.Search.map((movie) => (movieDict[movie.imdbID] = movie));
          setSearchResults(movieDict);
        },
        (error) => {
          setError(error);
        }
      );
  }
  function handleSearch(value) {
    setSearchTerm(value);
    getSearchResults(value);
  }

  useEffect(() => {
    if (searchTerm) {
      console.log(`this is searchTerm  ${searchTerm}`);
      console.log(searchResults);
      console.log(`Current Nominations ${nominated}`);
      if (nominationAmount >= 5) {
        if (banner != true) {
          setBanner(true);
        }
      } else if (nominationAmount < 5) {
        if (banner != false) {
          setBanner(false);
        }
      }
    }
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>The Shoppies</h1>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Banner
            text="Congrats! You nominated the max amount of 5!"
            classes={classes}
            render={banner}
          />
          <Search handleSearch={handleSearch} classes={classes} />
        </Grid>

        <Grid item xs>
          <ResultsView
            classes={classes}
            results={searchResults}
            searchTerm={searchTerm}
            _clickHandler={nominateMovie}
            _disableHandler={disableBtn}
          />
        </Grid>
        <Grid item xs>
          <NominatedView
            classes={classes}
            nominations={nominated}
            _clickHandler={removeNomination}
            _disableHandler={null}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

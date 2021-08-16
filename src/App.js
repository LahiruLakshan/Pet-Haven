import './App.css';
import React from "react";
import {makeStyles} from "@material-ui/core";
import NavBar from "./components/NavBar/navBar";
import Home from "./pages/home/home";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "blueviolet",
    minHeight: "100vh",

  },
  navBar:{
    // backgroundColor:"#a1009f",
    height: "15vh",
  },
  body:{
    // backgroundColor:"#a1009f",
  }
}));

function App() {

  const classes = useStyles();

  return (
      <div className={classes.root}
          // initial={{opacity:0}}
          // animate={{opacity:1}}
          // transition={{duration: 1}}
      >

        <div className={classes.navBar}>
          <NavBar/>
        </div>
        <div className={classes.body}>
          <Home/>
        </div>
        <div className={classes.navBar}>

        </div>
      </div>

  );
}

export default App;

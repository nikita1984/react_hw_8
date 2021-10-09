import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Playground from "./Playground";
import Cats from "./Cats";
import CatsHTTP from "./CatsHTTP";
import Home from "./Home";
import AppBar from "./AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.mainWrapper}>
        <AppBar />

        <Switch>
          <Route path="/chat/:id">
            <Chat />
          </Route>

          <Route path="/playground">
            <Playground myProps={1} />
          </Route>

          <Route path="/cats">
            <Cats />
          </Route>

          <Route path="/catsHTTP">
            <CatsHTTP />
          </Route>

          <Route path="/">
            <CatsHTTP />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

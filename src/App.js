import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewTODO from "./ViewTODO";
import CompletedTODO from "./CompletedTODO";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/show-todo">
          <ViewTODO />
        </Route>
        <Route path="/completed-todo">
          <CompletedTODO />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import OderReview from "./components/OderReview/OderReview";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/shop">
          <Main></Main>
        </Route>
        <Route path="/order">
          <OderReview></OderReview>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

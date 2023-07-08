import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PracticeScreen from "./Screens/PracticeScreen";
import RankScreen from "./Screens/RankScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PracticeScreen} />
          <Route path="/rank" component={RankScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

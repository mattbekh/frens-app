import './App.css';

import { WelcomePage } from "./containers/WelcomePage";
import { SigninPage } from "./containers/SigninPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div >
        <Switch>
          <Route path="/" exact component={WelcomePage}/>;
          <Route path="/signin" component={SigninPage}/>;
        </Switch>
      </div>
    </Router>
  );
}

export default App;

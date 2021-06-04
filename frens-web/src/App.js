
import './App.css';
import {useSelector} from "react-redux";

import { WelcomePage } from "./containers/WelcomePage";
import { SigninPage } from "./containers/SigninPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  // Check redux isDark state
  // const isDark = useSelector(state => state.isDark);
  // console.log(isDark);

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

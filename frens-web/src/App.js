import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./containers/MainPage/Main";
import Profile from "./containers/ProfilePage/Profile";
import RegisterPage from "./containers/Register Page";
import { WelcomePage } from "./containers/WelcomePage";
import { SigninPage } from "./containers/SigninPage";

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Header /> */}
                <div>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />;
                        <Route path="/signin" component={SigninPage} />;
                        <Route path="/register" component={RegisterPage} />;
                        <Route path="/main" component={Main} />;
                        <Route path="/profile" component={Profile} />;
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

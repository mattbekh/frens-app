import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./profilePage/Profile";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import RegisterPage from "./containers/Register Page";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div>
                    <RegisterPage />
                    <Profile />
                    <Switch>
                        <Route path="/main" component={Main}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div>
                    <Switch>
                        <Route path="/main" component={Main}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/browse'>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}

export default App

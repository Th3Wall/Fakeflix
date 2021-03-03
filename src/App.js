import { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Homepage from "./pages/Homepage/Homepage"

class App extends Component {
    constructor() {
        super()

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        id: snapShot.id,
                        ...snapShot.data()
                    }, () => {
                        console.log(this.state);
                    });
                })
            } else this.setState({ currentUser: null });
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render () {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/browse">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App

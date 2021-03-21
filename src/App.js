import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Movies from "./pages/Movies/Movies"
import TVSeries from './pages/TVSeries/TVSeries';
import Popular from "./pages/Popular/Popular";
import MyList from './pages/MyList/MyList';
import SignIn from "./pages/SignIn/SignIn"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from './redux/user/user.selectors';

const App = () => {
    
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    dispatch(setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    }))
                })
            } else dispatch(setCurrentUser(userAuth))
        })
        return () => unsubscribeFromAuth()
    }, [])

    return (
        <div className="App">
            {currentUser && <Navbar />}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route
                    path="/browse"
                    render={() => currentUser ? <Homepage /> : <Redirect to="/login" />}
                />
                <Route
                    path="/tvseries"
                    render={() => currentUser ? <TVSeries /> : <Redirect to="/login" />}
                />
                <Route
                    path="/movies"
                    render={() => currentUser ? <Movies /> : <Redirect to="/login" />}
                />
                <Route
                    path="/popular"
                    render={() => currentUser ? <Popular /> : <Redirect to="/login" />}
                />
                <Route
                    path="/mylist"
                    render={() => currentUser ? <MyList /> : <Redirect to="/login" />}
                />
                <Route
                    path="/login"
                    render={() => currentUser ? <Redirect to="/browse"/> : <SignIn />}
                />
            </Switch>
        </div>
    )
}

export default App;

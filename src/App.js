// import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Movies from "./pages/Movies/Movies"
import TVSeries from './pages/TVSeries/TVSeries';
import Popular from "./pages/Popular/Popular";
import MyList from './pages/MyList/MyList';
import Auth from "./pages/Auth/Auth";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import DetailModal from "./components/DetailModal/DetailModal";
import SplashAnimation from "./components/SplashAnimation/SplashAnimation";
import PlayAnimation from "./components/PlayAnimation/PlayAnimation";
// import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
// import { signInFailure, signInSuccess } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectSearchResults } from "./redux/search/search.selectors";

const App = () => {

    const currentUser = useSelector(selectCurrentUser);
    const searchResults = useSelector(selectSearchResults);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //         if (userAuth) {
    //             const userRef = await createUserProfileDocument(userAuth)
    //             userRef.onSnapshot(snapShot => {
    //                 dispatch(signInSuccess({
    //                     id: snapShot.id,
    //                     ...snapShot.data(),
    //                 }))
    //             })
    //         } else dispatch(signInFailure(null))
    //     })
    //     return () => unsubscribeFromAuth()
    // }, [dispatch])

    return (
        <div className="App">
            {currentUser && (
                <>
                    <Navbar />
                    <DetailModal />
                </>
            )}
            <Switch>
                <Route
                    exact
                    path="/"
                >
                    <Redirect to="/login" />
                </Route>
                <Route
                    path="/splash"
                    component={SplashAnimation}
                />
                <Route
                    path="/play"
                    component={PlayAnimation}
                />
                <Route
                    path="/search"
                    render={() => currentUser
                        ? (searchResults && <Search results={searchResults}/>)
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/browse"
                    render={() => currentUser
                        ? <Homepage />
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/browse/:categoryName"
                    render={(props) => currentUser
                        ? <Category {...props} />
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/tvseries"
                    render={() => currentUser ? <TVSeries /> : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/tvseries/:categoryName"
                    render={(props) => currentUser
                        ? <Category {...props} />
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/movies"
                    render={() => currentUser ? <Movies /> : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/movies/:categoryName"
                    render={(props) => currentUser
                        ? <Category {...props} />
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/popular"
                    render={() => currentUser ? <Popular /> : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/popular/:categoryName"
                    render={(props) => currentUser
                        ? <Category {...props} />
                        : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/mylist"
                    render={() => currentUser ? <MyList /> : <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/login"
                    render={() => currentUser ? <Redirect to="/splash"/> : <Auth />}
                />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    )
}

export default App;

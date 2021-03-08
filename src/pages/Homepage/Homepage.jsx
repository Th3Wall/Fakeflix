import "./homepage.scss"
import requests from "../../requests"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"

const Homepage = () => (
    <div className="Homepage">
        <Banner />
        <Row title="Top Rated on Fakeflix" genre='TopRated' fetchUrl={requests.fetchTopRated} />
        <Row title="Trending Now" genre='Trending' fetchUrl={requests.fetchTrending} />
        <Row title="Fakeflix Originals" genre='Netflix' fetchUrl={requests.fetchNetflixOriginals} isLarge />
        <Row title="Action Movies" genre='Action' fetchUrl={requests.fetchActionMovies} />
        <Row title="Adventure Movies" genre='Adventure' fetchUrl={requests.fetchAdventureMovies} />
        <Row title="Comedy Movies" genre='Comedy' fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" genre='Horror' fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" genre='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Animation Movies" genre='Animation' fetchUrl={requests.fetchAnimationMovies} />
    </div>
)

export default Homepage

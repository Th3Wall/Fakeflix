import requests from "../../requests"
import Row from '../../components/Row/Row';

const Homepage = () => (
    <div className="Homepage">
        <Row title="Top Rated on Fakeflix" fetchUrl={requests.fetchTopRated} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Fakeflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
    </div>
)

export default Homepage

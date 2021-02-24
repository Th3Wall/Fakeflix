import requests from "../../requests";
import Row from "../Row/Row";

const Homepage = () => (
    <div className='Homepage'>
        <Row title='Trending' fetchUrl={requests.fetchTrending} />
        <Row title='Popular' fetchUrl={requests.fetchPopular} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
    </div>
)

export default Homepage;
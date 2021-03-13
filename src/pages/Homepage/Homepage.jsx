import "./homepage.scss"
import requests from "../../requests"
import DynamicRow from "../../components/DynamicRow/DynamicRow"
import Banner from "../../components/Banner/Banner"

const Homepage = () => (
    <div className="Homepage">
        <Banner />
        <DynamicRow title="Action Movies" genre='Action' fetchUrl={requests.fetchActionMovies} />
        <DynamicRow title="Adventure Movies" genre='Adventure' fetchUrl={requests.fetchAdventureMovies} />
    </div>
)

export default Homepage

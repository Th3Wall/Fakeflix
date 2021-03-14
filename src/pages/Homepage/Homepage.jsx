import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveAllMovies } from '../../hooks/useRetrieveMovies';
import { homepageRows } from "./utils";

const Homepage = () => {

    useRetrieveAllMovies();
    
    return (
        <div className="Homepage">
            <Banner />
            {homepageRows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </div>
    )
}

export default Homepage

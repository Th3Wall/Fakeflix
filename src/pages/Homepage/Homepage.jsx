import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useSelector } from "react-redux";
import { useRetrieveAllMovies } from '../../hooks/useRetrieveMovies';
import { selectHomepageRows } from '../../redux/homepage/homepage.selectors';

const Homepage = () => {

    const homepageRows = useSelector(selectHomepageRows)
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

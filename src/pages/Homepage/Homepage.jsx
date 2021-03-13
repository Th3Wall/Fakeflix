import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useDispatch, useSelector } from "react-redux";
import { useRetrieveAllMovies } from '../../hooks/useRetrieveMovies';
import { selectHomepageRows } from '../../redux/homepage/homepage.selectors';
import { loadHomepageSections } from "../../redux/homepage/homepage.actions";
import { useEffect } from "react";

const Homepage = () => {

    const homepageRows = useSelector(selectHomepageRows)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadHomepageSections(homepageRows))
    }, [])

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

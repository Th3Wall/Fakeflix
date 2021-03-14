import "./homepage.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";

const Homepage = () => {

    const rows = useRetrieveData('movies');
    
    return (
        <div className="Homepage">
            <Banner />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </div>
    )
}

export default Homepage

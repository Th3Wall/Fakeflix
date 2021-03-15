import "./tvSeries.scss"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import { useRetrieveData } from "../../hooks/useRetrieveData";

const TVSeries = () => {

    const rows = useRetrieveData('series');
    
    return (
        <div className="TVSeries">
            <Banner type='series' />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
        </div>
    )
}

export default TVSeries

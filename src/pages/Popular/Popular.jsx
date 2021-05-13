import "./popular.scss"
import Row from "../../components/Row/Row"
import { useRetrieveData } from "../../hooks/useRetrieveData";

const Popular = () => {

	const rows = useRetrieveData('popular');

	return (
		<div className="Popular">
			{rows && rows.map(props => (
				<Row key={props.id} {...props} />
			))}
		</div>
	)
}

export default Popular
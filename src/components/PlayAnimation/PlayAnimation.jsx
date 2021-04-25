import "./playAnimation.scss"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PlayAnimation = () => {

	let history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			history.push('/browse')
		}, 4100)
	}, [history])

	return (
		<span className="PlayAnimation__text">FAKEFLIX</span>
	)
}

export default PlayAnimation

import "./playAnimation.scss"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PlayAnimation = () => {

	let history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			history.push('/browse')
		}, 3800)
	}, [history])

	return (
		<div className='PlayAnimation__wrp'>
			<span className="PlayAnimation__text">
				FAKEFLIX
			</span>
		</div>
	)
}

export default PlayAnimation

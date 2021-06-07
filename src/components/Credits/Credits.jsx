import "./credits.scss"
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";

const Credits = () => {
	return (
		<motion.footer
			variants={creditsFadeInUpVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='Credits'
		>
			<span>Developed by</span>
			<a className='Credits__linkwrp' href='https://github.com/Th3Wall' target='_blank' rel='noreferrer'>
				<span> Th3Wall</span>
				<img className='Credits__avatar' src='https://avatars.githubusercontent.com/u/25078541?v=4' alt='Credits Avatar' />
			</a>
		</motion.footer>
	)
}

export default Credits;

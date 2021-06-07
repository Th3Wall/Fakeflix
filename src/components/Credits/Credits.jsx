import "./credits.scss"
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";
import { GITHUB_AVATAR_URL, GITHUB_BASE_URL } from "../../requests";

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
			<motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				<span> Th3Wall</span>
				<img className='Credits__avatar' src={GITHUB_AVATAR_URL} alt='Credits Avatar' />
			</motion.a>
		</motion.footer>
	)
}

export default Credits;

import "./credits.scss"
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";
import wwwlogo from "../../assets/footer-cinema.webp";

const Credits = () => {
	return (
		<motion.footer
			variants={creditsFadeInUpVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='Credits'
		>
      <div className="Credits__about">
        <span className="Credits__aboutText">This service is made possible by public domain content. Please speak up against copyright terms extentions, as they are a tool to license our cultural heritage and sell it to the people. Culture should be free.</span>
        <div className="Credits__logoBox"><img className="Credits__logo" src={wwwlogo} alt="" /> <div>Brought to you by Flowtys, a project by www. </div></div>
      </div>
      <ul className="Credits__primarynav Credits__navlinks">
        <li className="Credits__navlinks--link">
          <motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href='https://archive.org/donate?origin=iawww-TopNavDonateButton' target='_blank' rel='noreferrer'>
            <span> Donate ETH to archive.org</span>
          </motion.a> 
        </li>
        <li className="Credits__navlinks--link">
          <motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href='https://flowtys.com' target='_blank' rel='noreferrer'>
            <span> Flowtys</span>
          </motion.a> 
        </li>
        <li className="Credits__navlinks--link">
          <motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href='https://studio.flowtys.com' target='_blank' rel='noreferrer'>
            <span> Flowtys Studio</span>
          </motion.a> 
        </li>
        {/* <li className="Credits__navlinks--link">
          <motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href='' target='_blank' rel='noreferrer'>
            <span> Suggest content</span>
          </motion.a> 
        </li> */}
        {/* <li className="Navbar__navlinks--link">
          <NavLink to="/mylist" activeClassName="activeNavLink">
            My list
          </NavLink>
        </li> */}
      </ul>
			{/* <motion.a whileTap={{scale: 0.9}} className='Credits__linkwrp' href={GITHUB_BASE_URL} target='_blank' rel='noreferrer'>
				<span> Th3Wall</span>
				<img className='Credits__avatar' src={GITHUB_AVATAR_URL} alt='Credits Avatar' />
			</motion.a> */}
		</motion.footer>
	)
}

export default Credits;

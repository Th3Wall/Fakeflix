import "./credits.scss"

const Credits = () => {
	return (
		<footer className='Credits'>
			<span>Developed by</span>
			<div className='Credits__wrp'>
				<a className='Credits__link' href='https://github.com/Th3Wall' target='_blank' rel='noreferrer' > Th3Wall</a>
				<a className='Credits__link' href='https://github.com/Th3Wall' target='_blank' rel='noreferrer' >
					<img className='Credits__avatar' src='https://avatars.githubusercontent.com/u/25078541?v=4' alt='Credits Avatar' />
				</a>
			</div>
		</footer>
	)
}

export default Credits;

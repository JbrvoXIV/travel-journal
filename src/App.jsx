import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Footer from "./components/Footer"
import data from './data'

const App = () => {

	const [darkMode, setDarkMode] = useState(false)
	const onyx = "#353935"

  	const card = data.map((item, index) => {
		return (
		<Card 
			key={index} 
			{...item}
			darkMode={darkMode}
		/>
		)
	})

	const toggle = () => {
		setDarkMode(prev => !prev)
	}

	const styles = {
		backgroundColor: darkMode ? onyx : "white"
	}

	if(darkMode)
		document.body.style.backgroundColor = onyx
	else
		document.body.style.backgroundColor = "white"

	return (
		<div className='container' style={styles}>
		<Navbar 
			darkMode={darkMode}
			toggle={toggle}	
		/>
		<article className="card-container">
			{card}
		</article>
		<Footer 
			darkMode={darkMode}
		/>
		</div>
	);
}

export default App;

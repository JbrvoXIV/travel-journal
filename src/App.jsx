import React from 'react';
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Footer from "./components/Footer"
import data from './data'

const App = () => {

  const card = data.map((item, index) => {
    return (
      <Card key={index} {...item}/>
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <article className="card-container">
        {card}
      </article>
      <Footer />
    </div>
  );
}

export default App;

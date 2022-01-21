import React from 'react';
import Navbar from "./components/Navbar"
import Card from './components/Card'
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
      {card}
    </div>
  );
}

export default App;

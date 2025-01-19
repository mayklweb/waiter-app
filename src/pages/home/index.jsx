import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="container">
      <Link to={'/room'}>ROOM</Link>
      
      </div>
    </div>
  )
}

export default Home
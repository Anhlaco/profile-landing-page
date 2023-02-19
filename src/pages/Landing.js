import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <div>
        <Link to={'/main'}>Main Page</Link>
      </div>
    </div>
  )
}

export default Landing

import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <div>
        <Link to={'/'}>Back to Landing</Link>
      </div>
    </div>
  )
}

export default Main

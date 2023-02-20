import React from 'react'
import './Landing.css'

import Member from '../components/Member/Member'
const Landing = () => {
  return (
    <div className='wrapper'>
      <h1>wellcome to our team profile</h1>
      <div className='landing__container'>
        <Member />
      </div>
    </div>
  )
}

export default Landing

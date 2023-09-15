import React from 'react'

const Button = ({onClick}) => {
  return (
    <div>
      <button className='btn btn-md btn-lg-6  btn-sm-2 btn-primary' onClick={onClick}>Get Repos</button>
    </div>
  )
}

export default Button

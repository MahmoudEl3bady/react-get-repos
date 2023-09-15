import React from 'react'

import { useState } from 'react';
const SearchBar = ({onChange,input}) => {
  
  return (
    <>
          <input htmlFor='search' placeholder='GitHub Username' type='text' 
          onChange={onChange} value={input}
          className='form-control form-control-md w-50 col-lg-6 col-md-4 col-sm-2 me-4'>
          </input>
    </>
  )
}

export default SearchBar

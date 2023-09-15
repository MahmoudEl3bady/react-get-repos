import React from 'react'
import SearchBar from './SearchBar';
// import { Button as Btn } from 'bootstrap'
import { useState } from 'react';
import Button from './Button.jsx'
function Header({handleClick,userName,onChange}) {
  
    return (
        <div className='d-flex flex-row justify-content-center mt-5'>
            <SearchBar onChange={onChange} input={userName}/>
            <Button onClick={handleClick}/>
        </div>
    )
}

export default Header

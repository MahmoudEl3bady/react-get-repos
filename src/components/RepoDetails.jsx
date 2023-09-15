import React from 'react'

const RepoDetails = ({ repo ,user}) => {
  return (
    <div className='container'>
      <div className='row row-cols-6 d-flex flex-row justify-content-between bg-light pt-1 mt-3 m-2 align-items-center'>
        <ul className='list-unstyled '>
          <li className='text-danger'> Name </li>
          <li className=''>{repo.name}</li>
        </ul>
          <ul className='list-unstyled '>
            <li className='text-danger'>Stars</li>
            <li className=''>{repo.stargazers_count}</li>
          </ul>
        <ul className='list-unstyled '>
          <li className='text-danger'>Watchers</li>
          <li className=''>{repo.watchers}</li>
        </ul>
        <ul className=''>
          <a href={`https://github.com/${user}/${repo.name}`} className='btn btn-info ' target='blank'>Visit</a>          
        </ul>
      </div>
    </div>
  )
}

export default RepoDetails

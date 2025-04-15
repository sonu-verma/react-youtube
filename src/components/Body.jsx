import React from 'react'
import Sidebar from './body/Sidebar'
import MainVideoContainer from './body/MainVideoContainer'

const Body = () => {
  return <>
    <div className='flex flex-row mt-15'>
        <Sidebar />
        <MainVideoContainer />
    </div>
  </>
}

export default Body

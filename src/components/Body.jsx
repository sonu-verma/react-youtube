import React from 'react'
import Sidebar from './body/Sidebar'
import MainVideoContainer from './body/MainVideoContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return <>
    <div className='flex flex-row mt-15'>
         <Sidebar />
        {/* <MainVideoContainer /> */}
        <Outlet />
    </div>
  </>
}

export default Body

import React from 'react'
import SidebarLink from './sidebar/SidebarLink'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebarOpen = useSelector(store => store.app.isSidebarOpen);  
  return (
    <div className={`${isSidebarOpen ? 'basis-25': 'basis-60'} h-screen`}>
        <SidebarLink />
    </div>
  )
}

export default Sidebar
    
import React from 'react'
import NavbarChat from './navbarChat'
import Search from './search'
import Chats from './chats'

function SideBar() {
  return (
    <div className='sidebar'>
      <NavbarChat/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBar

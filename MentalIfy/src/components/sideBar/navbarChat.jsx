import React from 'react'
import { useUser } from '../../contexts/UserContext'

function NavbarChat() {

  const {user} = useUser();
  // console.log(user.name)

  return (
    <div className='navbar'>
      <span className='logo'>MentalChat</span>
      <div className='user'>
          <img src="" alt="" />
          <span> {user.name}</span>
      </div>
    </div>
  )
}

export default NavbarChat
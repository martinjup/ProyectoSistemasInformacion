import './Chat.css'
import React from 'react'
import SideBar from '../../components/sideBar/sideBar'
import ChatC from '../../components/chatC/chatC'

// Pagina de Chat
export function Chat() {
  return (
    <div className='chat'>
        <div className='containers'>
            <SideBar/> 

            <ChatC/>

            
        </div>
    </div>

  )

}

// export default Chat
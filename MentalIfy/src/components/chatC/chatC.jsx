import React from 'react'
import Messages from './messages'
import Input from './input'
import { useChat } from '../../contexts/ChatContext'

const  ChatC = () => {
  const { data} = useChat()
  return (
    
      <div className='chatC'>
        <div className='chatInfo'>
          <span>{data.user?.name}</span>
        </div>
        <Messages />
        <Input />
      </div>
    
  )
}

export default ChatC
import React from 'react'
import {useUser} from '../../contexts/UserContext'
import {useChat} from '../../contexts/ChatContext'

const Message = ({message}) => {
  const {user} = useUser()
  const {data} = useChat()
  console.log(message)

  return (
    <div className='message owner'> 
      {/* <div className="messageInfo">
        <img src="https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hi</p>
        <img src="https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg" alt="" />

      </div> */}
    </div>
  )
}

export default Message
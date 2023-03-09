import { async } from '@firebase/util'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useChat } from '../../contexts/ChatContext'
import { useUser } from '../../contexts/UserContext'
import { db } from '../../firebase/firebaseConfig'

function Chats() {

  const [chats, setChats] = useState([])
  const { user } = useUser()
  const { dispatch } = useChat()
  useEffect(() => {

    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'usersChats', user.id), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub
      }
    }

    user.id && getChats()
  }, [user.id])

  const handleSelect = async (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
  }
  return (
    <div className='chats'>

      {chats && Object.entries(chats)?.map(chat => (
        
       <div className='userChat' key={chat[1].userInfo.id} onClick={() => handleSelect(chat[1].userInfo)}>
          <div className="userChatInfo">
            <span className='username'>{chat[1].userInfo.name}</span>
                <p className='lastMessage'>{chat[1].lastMessage?.text}</p>
              </div>
            </div>
          ))}
    
      {!chats && <span className='username'>Sin chats</span>}
    </div>
  )
}

export default Chats    
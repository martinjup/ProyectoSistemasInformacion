import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useChat } from '../../contexts/ChatContext'
import { useUser } from '../../contexts/UserContext'
import { db } from '../../firebase/firebaseConfig'

function Chats() {

  const [chats, setChats] = useState([])
  const { user } = useUser()
  const {dispatch} = useChat()
  useEffect(() => {

    const getChats = () => {

      const unsub = onSnapshot(doc(db, 'usersChats', user.id), (doc) => {
        setChats(doc.data())
        console.log(doc.data())
      })
        console.log(chats)
      return () => {
        unsub()
      }
    }

    user.id && getChats()
  }, [user.id])


  console.log(chats)

  const handleSelect = (u) =>{
    dispatch({type:"CHANGE_USER", payload: u})
  }
  return (
    <div className='chats'>
      {Object.entries(chats)?.map(chat=>(

      
      <div className='userChat' key={chat[0]} onClick={()=>handleSelect(chat[1])}>
        <img src="" alt="" />
        <div className="userChatInfo">
          <span className='username'>{chat[1].name}</span>
          <p className='lastMessage'>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats
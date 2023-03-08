import React, { useEffect, useState } from 'react'
import Message from './message'
import { useChat } from '../../contexts/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data} = useChat()

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId) , (doc) =>{
      doc.exists() && setMessages(doc.data().messages)
    })

    return () =>{
      unSub()
    }
  }, [data.chatId])


  return (
    
    <div className='messages h-[calc(100%-160px)]'>
        {messages.map(m=>(
          <Message message={m} key={m.id}/>
        ))}
        
    </div>
  )
}

export default Messages
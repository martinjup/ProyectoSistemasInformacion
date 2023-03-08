import React, { useState } from 'react'
import Attach from '../../img/attach.png'
import Image from '../../img/imagen.png'
import { useUser } from '../../contexts/UserContext'
import { useChat } from '../../contexts/ChatContext'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'


const Input = () => {
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const { user } = useUser()
  const { data } = useChat()

  const handleSend = async () => {
    if (image) {

      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, image)

      uploadTask.on(
        (error) => {
          // setErr(true);
        },  
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.id,
                date: Timestamp.now(),
                img: downloadURL

              })
            })
          })
        }
      )

    } else {
      console.log(data)
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.id,
          date: Timestamp.now()

        })
      })
    }

    

    await updateDoc(doc(db, 'usersChats', user.id), {
      [data.chatId + '.lastMessage'] :{
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })

    await updateDoc(doc(db, 'usersChats', data.user.id), {
      [data.chatId + '.lastMessage'] :{
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })

    setText("")
  }

  return (
    <div className='inputChat'>
      <input type="text" placeholder='Type' onChange={e => setText(e.target.value)} value={text} />
      <div className="send">
        <img src={Attach} alt="" className='imagen' />
        <input type="file" style={{ display: "none" }} id="file" onChange={e => setImage(e.target.files[0])} />
        <label htmlFor="file">
          <img src={Image} alt="" className='imagen' />
        </label>
        <button className='sendButton' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
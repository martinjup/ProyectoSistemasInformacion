import { async } from '@firebase/util'
import { collection, getDoc, getDocs, query, where, setDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { useUser } from '../../contexts/UserContext'

function Search() {

  const [username, setUsername] = useState("")
  const [userP, setUser] = useState(null)
  const [error, setError] = useState(false)
  const {user} = useUser(); 
  

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", username))
    try {

      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })

    } catch (err) {
      setError(true)
    }
  }
  const handleKey = e => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async ()=>{

    const ids =  user.id > userP.id ? user.id + userP.id : userP.id + user.id

    
    try {
      const res = await getDoc(doc(db, "chats", ids))

      if (!res.exists()) {
        // create chat
        await setDoc(doc(db, 'chats', ids), {messages:[]})
        
        
        await setDoc(doc(db, "usersChats", user.id),{
          [ids+".userInfo"] : {
            id: userP.id,
            name: userP.name,

          },
          [ids+".date"]: serverTimestamp()
        
        })

        await setDoc(doc(db, "usersChats", userP.id),{
          [ids+".userInfo"] : {
            id: user.id,
            name: user.name,

          },
          [ids+".date"]: serverTimestamp()
        
        })

      }

    } catch (er) {
      console.log(er)
    }

    setUser(null)
    setUsername("")
  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" 
        className='inputSearch' 
        placeholder='Find a user' 
        onKeyDown={handleKey} 
        onChange={e => setUsername(e.target.value)} 
        value={username}/>
      </div>
      {error && <span>User not found</span> }
      {userP && <div className='userChat' onClick={handleSelect}>
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>{userP.name}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search
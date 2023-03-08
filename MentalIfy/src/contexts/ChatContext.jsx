import React, { useContext, createContext,useReducer } from "react";
import {useUser } from "./UserContext";

export const ChatContext = createContext()


// const { user } = useUser()
export const  ChatContextProvider = ({ children }) => {
    
const { user } = useUser()
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    }

    

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: user.id > action.payload.id ? user.id + action.payload.id : action.payload.id + user.id
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        <ChatContext.Provider value={{data:state, dispatch}} >
            {children}
        </ChatContext.Provider>
    )
}

export function useChat() {
    return useContext(ChatContext)
}

import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {  addMessage } from './../../../utils/chatSlice'
import { getRandomDescription, getRandomInt, getRandomName } from '../../../utils/helper'
const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages)

  
  useEffect( () => {
    const timer = setInterval(() => {
        // console.log("Interval called")
        const chatMessage = {
        name: getRandomName(),
        message: getRandomDescription(getRandomInt(3,12))
        }
        dispatch(addMessage(chatMessage))
    }, 500);


    return () => clearInterval(timer);
  }, [])
  
return (
    <div className='border-1 border-black w-[95%] mx-2 p-2 bg-slate-100 h-[500px] rounded-sm shadow-lg relative'>
           <div className='h-[430px]  overflow-y-scroll flex flex-col-reverse'>
            {
                    chatMessages.length === 0 && <div className='text-center'>No messages yet</div>
            }
            {
                 chatMessages.length > 0 && chatMessages.map((chat, index) => <ChatMessage key={index} chat={ chat } />)
            }
           </div>
            
            <div className='absolute bottom-0 left-0 w-full bg-white p-2 rounded-xl'>
                    <ChatForm />
            </div>
    </div>
)
}

export default LiveChat

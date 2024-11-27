import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../slices/chatSlice";
import {generateRandomNames, randomMessage} from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const messages = useSelector(state => state.chat.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        const i = setInterval(() => {
            // Api Polling
            dispatch(addMessage({
                name: generateRandomNames(),
                message: randomMessage(Math.floor(Math.random() * 25)),

            }))
        }, 1500)
        return () => {
            clearInterval(i)
        }
    }, []);

    return (
        <>
            <div className="border-2 rounded-lg p-3 border-black w-full h-[600px] bg-gandalf dark:bg-beige overflow-y-scroll flex flex-col-reverse">
                <div>
                    { messages && messages.map((message, i) => (
                        <ChatMessage key={i} name={message.name} message={message.message} />
                        ))
                    }
                </div>
            </div>
            <form className="w-full my-2 p-3 border border-black rounded-md"
                  onSubmit={(e) => {
                      e.preventDefault()
                      setLiveMessage("")
                      dispatch(addMessage({
                          name: "Metin",
                          message: liveMessage,
                      }))
                  }}
            >
                <input className="w-9/12 border border-gandalf rounded-md px-1" value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}} type="text"/>
                <button className="text-beige font-bold bg-gandalf rounded-md px-2 py-1 ml-2">Send</button>
            </form>
        </>
    );
};

export default LiveChat;
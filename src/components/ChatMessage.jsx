import React from 'react';

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center my-1 hover:bg-beige rounded-md">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
                className="w-8"
                alt="user icon"
            />
            <p className="font-bold px-2">{name}:</p>
            <span>{message}</span>

        </div>
    );
};

export default ChatMessage;
const ChatForm = () => {    
    return (
        <div className="chat-form">
            <form className="flex gap-2 justify-between items-center  bg-gray-100 rounded-lg shadow-md">
                <input type="text" className="border-none hover:outline-none w-full p-2 rounded-2xl pl-2" placeholder="Type your message..." />
                <button className="bg-red-400 p-2 rounded-xl text-white" type="submit">Send</button>
            </form>
        </div>
    );
}   

export default ChatForm;
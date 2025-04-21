const ChatMessage = ({ chat }) => {
    return <>
        <div className="flex gap-2 items-center m-1 bg-white p-1">
            <img className="w-[40px] h-[40px] rounded-full" src={`https://ui-avatars.com/api/?name=${chat?.name}`} alt="profileName" />
            <div className="flex gap-3">
                <p className="line-clamp-2"><span className="mx-4 font-bold">{chat?.name}</span>{chat?.message}</p>
            </div>
        </div>
    </>;
}

export default ChatMessage;
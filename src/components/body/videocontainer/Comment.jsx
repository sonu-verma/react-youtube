const Comment = ({comment}) => {
    return <>
        <div className="comment-container flex items-center gap-4 bg-gray-200 p-2 m-2">
            <h2 className="bg-gray-100 rounded-full p-4"><img src={`https://ui-avatars.com/api/?name=${comment.author}`} alt="profileName" /></h2>
            <div>
                <h1>{comment?.author}</h1>
                <p>{comment?.text}</p>
            </div>
        </div>
    </>
}

export default Comment;
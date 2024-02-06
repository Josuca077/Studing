export default function Comment ({ comment }) {
    return (
        <div className="comment">
                    <h3>{comment.email}</h3>
                    <p>{comment.date} {comment.time}</p>
                    <p className="comment-text">{comment.comment}</p>
                 </div>
    )
}
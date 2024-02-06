import useCommentSection from "./hooks/useComentSection"
import Form from "./components/Form"
import Comment from "./components/Comment"

function App () {
    const commentsFeed = useCommentSection()

    return (
        <div className="app">

            <Form commentsFeed={commentsFeed} />

            <hr />
            <div className="commentSection">
                {commentsFeed.comments.length > 0 ? commentsFeed.comments.map(comment => (
                    <Comment key={commentsFeed.comments.indexOf(comment)} comment={comment}/>
                )) : <p>Seja o Primeiro a Comentar</p>}
            </div>
        </div>
    )
}
export default App
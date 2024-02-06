import { useState } from "react"
import PropTypes from "prop-types"

Form.propTypes = {
    commentsFeed: PropTypes.object
}

export default function Form ({ commentsFeed }) {
    const [ email, setEmail ] = useState("")
    const [ comment, setComment ] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        commentsFeed.addComment({ email, comment })
        setEmail("")
        setComment("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
            </div>
            <div>
                <label htmlFor="comment">Comentário:</label>
                <textarea rows="10" cols="36" id="comment" value={comment} onChange={ev => setComment(ev.target.value)}/>
            </div>
            <button>Publicar Comentário</button>
        </form>
    )
}
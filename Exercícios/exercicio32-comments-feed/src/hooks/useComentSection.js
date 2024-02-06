import { useState } from "react"
import dayjs from "dayjs"

export default function useCommentSection () {
    const [ comments, setComments ] = useState([])

    const addComment = ({ email, comment }) => {

        const date = dayjs()

        const newComment = {
            email,
            comment,
            date: date.format('DD/MM/YY'),
            time: date.format('HH:mm')
        }
        setComments(state => [newComment, ...state])

    }

    return { comments, addComment }
}
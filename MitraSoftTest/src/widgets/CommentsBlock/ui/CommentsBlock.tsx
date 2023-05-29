import { getCommentsForPost } from 'app/api/getCommentsForPost'
import { ICommentItem } from 'entities/Comments/types'
import { CommentCard } from 'entities/Comments/ui/CommentCard'
import { type FC, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'
import { Loader } from 'widgets/Loader'
import classes from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setPostsHistory } from 'app/store/slices/mainSlice'

interface ICommentsBlockProps {
    postId: number
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ postId }) => {
    const NO_COMMENTS_MESSAGE = 'There are no comments yet'
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isError, setError] = useState<boolean>(false)
    const [comments, setComments] = useState<ICommentItem[]>()
    const [errorMessage, setErrorMessage] = useState<string>('')

    const postsHistory = useAppSelector(state => state.main.postsHistory)

    const dispatch = useAppDispatch()

    const onEnterHandler = async () => {
        if (!comments) {
            const existingCommentHistory = postsHistory.find(item => item.postId === postId)

            if (existingCommentHistory) {
                setComments(existingCommentHistory.comments)
            } else {
                setLoading(true)
                const response = await getCommentsForPost(postId)
                setLoading(false)
                if (response.isSucceeded) {
                    setComments(response.data || [])
                    dispatch(setPostsHistory([...postsHistory, { postId, comments: response.data || [] }]))
                } else {
                    setError(true)
                    setErrorMessage(response.message || DEFAULT_ERROR_MESSAGE)
                }
            }
        }
    }

    return (
        <Accordion>
            <Accordion.Item eventKey={ `${postId}` }>
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body onEnter={ onEnterHandler }>
                    {
                        comments && comments.length
                            ? comments.map(comment => {
                                return (
                                    <div key={ comment.id } className={ classes.commentsWrapper }>
                                        <CommentCard comment={ comment } />
                                    </div>
                                )
                            })
                            : isLoading
                                ? <Loader />
                                : isError
                                    ? <p>{ errorMessage }</p>
                                    : <p>{ NO_COMMENTS_MESSAGE }</p>
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

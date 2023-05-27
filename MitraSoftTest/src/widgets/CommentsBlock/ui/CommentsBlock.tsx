import { getCommentsForPost } from 'app/api/getCommentsForPost'
import { ICommentItem } from 'entities/Comments/types'
import { CommentCard } from 'entities/Comments/ui/CommentCard'
import { type FC, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'
import { Loader } from 'widgets/Loader'
import classes from './styles.module.scss'

interface ICommentsBlockProps {
    postId: number
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ postId }) => {
    const NO_COMMENTS_MESSAGE = 'There are no comments yet'
    const [commentLoaded, setCommentsLoaded] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isError, setError] = useState<boolean>(false)
    const [comments, setComments] = useState<ICommentItem[]>()
    const [errorMessage, setErrorMessage] = useState<string>('')

    const onEnterHandler = async () => {
        if (!commentLoaded) {
            setLoading(true)
            setCommentsLoaded(true)
            const response = await getCommentsForPost(postId)
            await new Promise(res=> setTimeout(() => res(true), 500))
            setLoading(false)
            if (response.isSucceeded) {
                setComments(response.data || [])
            } else {
                setError(true)
                setErrorMessage(response.message || DEFAULT_ERROR_MESSAGE)
            }
        }
    }

    return (
        <Accordion>
            <Accordion.Item eventKey={ `${postId}` }>
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body onEnter={ onEnterHandler }>
                    {
                        commentLoaded
                            ? isLoading
                                ? <Loader />
                                : isError
                                    ? <p>{ errorMessage }</p>
                                    : comments
                                        ? comments.map(comment => {
                                            return (
                                                <div className={ classes.commentsWrapper }>
                                                    <CommentCard comment={ comment } />
                                                </div>
                                            )
                                        })
                                        : <p>{ NO_COMMENTS_MESSAGE }</p>
                            : ''
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

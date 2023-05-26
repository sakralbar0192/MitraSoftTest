import { useAppDispatch, useAppSelector } from 'app/hooks'
import { changeActivePaginationIndex } from 'app/store/slices/postsSlice'
import { type FC } from 'react'
import { Pagination } from 'react-bootstrap'
import classes from './style.module.scss'

export const PostsPagination: FC = () => {
    const splitedPosts = useAppSelector(state => state.posts.splitedPosts)
    const activePaginationIndex = useAppSelector(state => state.posts.activePaginationIndex)
    const dispatch = useAppDispatch()

    const items = []
    for (let i = 0; i < splitedPosts.length; i++) {
        items.push(
            <Pagination.Item
                key={ i }
                active={ i === activePaginationIndex }
                onClick={ () => {dispatch(changeActivePaginationIndex(i))} }
            >
                { i + 1 }
            </Pagination.Item>,
        )
    }

    return (
        <div className={ classes.pagination }>
            <Pagination size='lg'>{items}</Pagination>
        </div>
    )
}

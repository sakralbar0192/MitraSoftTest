import { useState, type FC, ChangeEvent } from 'react'
import classes from './style.module.scss'
import { Dropdown, Form } from 'react-bootstrap'
import { TValueOf } from 'shared/types'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { sortPostsAlphabetically } from 'entities/Posts/helpers/sortPostsAlphabetically'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'
import { changeSplitedPosts } from 'app/store/slices/postsSlice'
import { filterPostsByTitile } from 'entities/Posts/helpers/filterPostsByTitile'

export const PostsFilters: FC = () => {
    const MIN_CHARACTERS_FOR_SEARCH = 2
    const posts = useAppSelector(state => state.posts.posts)
    const displayedPostsCount = useAppSelector(state => state.posts.displayedPostsCount)
    const dispatch = useAppDispatch()

    const ESortingOrders = {
        asc: 'Ascending',
        des: 'Descending'
    }
    type ESortingOrders = TValueOf<typeof ESortingOrders>

    const [sortOrder, setSortOrder] = useState<ESortingOrders>()

    const chooseSortOrderHandler = (sortOrder: ESortingOrders) => {
        setSortOrder(sortOrder)
        const sortedPosts = sortPostsAlphabetically(posts, sortOrder === ESortingOrders.asc)
        const splitedPosts = splitPosts(sortedPosts, displayedPostsCount)
        dispatch(changeSplitedPosts(splitedPosts))
    }

    const searchFieldInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        const filteredPosts = value.length < MIN_CHARACTERS_FOR_SEARCH
            ? posts
            : filterPostsByTitile(posts, value)
        const splitedPosts = splitPosts(filteredPosts, displayedPostsCount)
        dispatch(changeSplitedPosts(splitedPosts))
    }

    return (
        <div className={ classes.filters }>
            <Form.Control
                size='lg'
                type='search'
                placeholder='Search in post title'
                onInput={ searchFieldInputHandler }
            />

            <Dropdown>
                <Dropdown.Toggle variant='success'>
                    {
                        sortOrder || 'Sort alphabetically'
                    }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        onClick={ () => chooseSortOrderHandler(ESortingOrders.des) }
                    >
                        Descending
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={ () => chooseSortOrderHandler(ESortingOrders.asc) }
                    >
                        Ascending
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

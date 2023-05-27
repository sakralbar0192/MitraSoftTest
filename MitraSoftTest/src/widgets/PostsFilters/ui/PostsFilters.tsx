import { useState, type FC, ChangeEvent, useMemo } from 'react'
import classes from './style.module.scss'
import { Dropdown, Form } from 'react-bootstrap'
import { TValueOf } from 'shared/types'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { sortPostsAlphabetically } from 'entities/Posts/helpers/sortPostsAlphabetically'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'
import { changeSplitedPosts } from 'app/store/slices/postsSlice'
import { filterPostsByTitile } from 'entities/Posts/helpers/filterPostsByTitile'

export const PostsFilters: FC = () => {
    const DEFAULT_DROPDOWN_LABEL = 'Sort alphabetically'
    const MIN_CHARACTERS_FOR_SEARCH = 2
    const posts = useAppSelector(state => state.posts.posts)
    const splitedPosts = useAppSelector(state => state.posts.splitedPosts)
    const displayedPostsCount = useAppSelector(state => state.posts.displayedPostsCount)
    const dispatch = useAppDispatch()

    const ESortingOrders = {
        asc: 'Ascending',
        des: 'Descending'
    }
    type ESortingOrders = TValueOf<typeof ESortingOrders>

    const [sortOrder, setSortOrder] = useState<ESortingOrders | typeof DEFAULT_DROPDOWN_LABEL>(DEFAULT_DROPDOWN_LABEL)
    const [searchString, setSearchString] = useState<string>('')

    const chooseSortOrderHandler = (sortOrder: ESortingOrders) => {
        setSearchString('')
        setSortOrder(sortOrder)
        const sortedPosts = sortPostsAlphabetically(posts, sortOrder === ESortingOrders.asc)
        const splitedPosts = splitPosts(sortedPosts, displayedPostsCount)
        dispatch(changeSplitedPosts(splitedPosts))
    }

    const searchFieldInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchString(value)
        let newSplitedPosts
        if (value.length < MIN_CHARACTERS_FOR_SEARCH) {
            if (sortOrder !== DEFAULT_DROPDOWN_LABEL) {
                const sortedPosts = sortPostsAlphabetically(posts, sortOrder === ESortingOrders.asc)
                newSplitedPosts = splitPosts(sortedPosts, displayedPostsCount)
            } else {
                newSplitedPosts = splitPosts(posts, displayedPostsCount)
            }
        } else {
            setSortOrder(DEFAULT_DROPDOWN_LABEL)
            const filteredPosts = filterPostsByTitile(posts, value)
            newSplitedPosts = splitPosts(filteredPosts, displayedPostsCount)
        }
        dispatch(changeSplitedPosts(newSplitedPosts))
    }

    return (
        <div className={ classes.filters }>
            <Form.Control
                value={ searchString }
                size='lg'
                type='search'
                placeholder='Search in post title'
                onInput={ searchFieldInputHandler }
            />

            <Dropdown>
                <Dropdown.Toggle variant='success'>
                    {
                        sortOrder
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

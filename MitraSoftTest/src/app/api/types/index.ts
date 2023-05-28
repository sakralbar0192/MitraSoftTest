import { TValueOf } from 'shared/types'

export const EApiMethods = {
    GET_ALL_POSTS: 'https://jsonplaceholder.typicode.com/posts',
    GET_COMMENTS_BY_POST: 'https://jsonplaceholder.typicode.com/comments',
    GET_USER: 'https://jsonplaceholder.typicode.com/users'
} as const
export type EApiMethods = TValueOf<typeof EApiMethods>

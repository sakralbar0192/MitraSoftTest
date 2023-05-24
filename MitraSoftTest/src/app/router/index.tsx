import { createBrowserRouter, defer } from 'react-router-dom'
import { PostsPage } from 'pages/PostsPage'
import { AboutMePage } from 'pages/AboutMePage'
import { AboutUserPage } from 'pages/AboutUserPage'
import { ErrorBoundary } from 'pages/ErrorBoundary'
import App from 'app/App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'AboutMe',
                element: <AboutMePage />,
                loader: async () => {
                    const comments = new Promise(res=> setTimeout(() => res('lol'), 3000))
                    return defer({ comments })
                }
            },
            {
                path: 'AboutUser',
                element: <AboutUserPage />
            },
            {
                path: '',
                element: <PostsPage />
            }
        ],
        errorElement: <ErrorBoundary />
    }
])

export default router

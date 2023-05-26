import { createBrowserRouter } from 'react-router-dom'
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
                element: <AboutMePage />
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

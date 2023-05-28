import { LoaderFunctionArgs, createBrowserRouter, defer } from 'react-router-dom'
import { PostsPage } from 'pages/PostsPage'
import { AboutMePage } from 'pages/AboutMePage'
import { AboutUserPage } from 'pages/AboutUserPage'
import { ErrorBoundary } from 'pages/ErrorBoundary'
import App from 'app/App'
import { getUser } from 'app/api/getUser'

interface IAboutUserPageLoaderArgs extends LoaderFunctionArgs {
    userId?: number
}

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
                path: 'AboutUser/:userId',
                element: <AboutUserPage />,
                loader: ({ params }: IAboutUserPageLoaderArgs) => defer({ response: getUser(params.userId) })
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

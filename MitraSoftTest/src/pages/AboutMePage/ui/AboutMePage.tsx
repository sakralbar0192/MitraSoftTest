import { FC, Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'

export const AboutMePage: FC = () => {
    const { comments } = useLoaderData() as {comments: string}

    return (
        <Suspense fallback='Loading...'>
            <div>AboutMePage</div>
            <Await
                resolve={ comments }
                errorElement={ <p>Soething went wrong</p> }
            >
                {(comments) => <p>{comments}</p>}
            </Await>
        </Suspense>
    )
}

import { type FC } from 'react'
import { Link } from 'react-router-dom'

export const AppHeader: FC = () => {
    return (
        <>
            <Link to=''>Posts</Link>
            <Link to='AboutMe'>About me</Link>
        </>
    )
}

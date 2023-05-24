import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'widgets/AppHeader/ui/AppHeader'

const App: FC = ()=> {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}

export default App

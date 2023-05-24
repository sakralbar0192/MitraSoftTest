import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from 'app/router/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>,
)

import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SW from '@config/sw'
import { RouterProvider } from 'react-router-dom'
import router from '@router'
import 'src/styles/global.css'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: '24px' }}>
      <SnackbarProvider>
        <SW />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </IconContext.Provider>
  </React.StrictMode>,
)

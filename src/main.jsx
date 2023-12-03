import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScreenContextProvider from './context/ScreenContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ScreenContextProvider>
    <App />
  </ScreenContextProvider>
  </React.StrictMode>,
)

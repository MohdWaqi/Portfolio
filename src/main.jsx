import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScreenContextProvider from './context/ScreenContextProvider.jsx'
import MouseContextProvider from './context/MouseContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ScreenContextProvider>
  <MouseContextProvider>
    <App />
  </MouseContextProvider>
  </ScreenContextProvider>
  </React.StrictMode>,
)

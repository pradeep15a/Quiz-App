import React from 'react'
import ReactDOM from 'react-dom'
import './Components/style.css'
import App from './Components/App'
import { AppProvider } from './Components/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

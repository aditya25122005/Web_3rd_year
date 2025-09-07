import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Div from './App.jsx'
import {Sam}  from './components/Sam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    <App/>
    <Div></Div>
    <Span></Span>
    <Sam/>
    
  </StrictMode>,
)

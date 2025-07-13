import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GroceryProvider } from './components/GroceryContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroceryProvider>
      <App />
    </GroceryProvider>
    
  </StrictMode>,
)

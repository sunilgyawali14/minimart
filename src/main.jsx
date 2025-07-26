import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* 3) wrapping app into a ThemeProvider */}
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider> 
    </ThemeProvider>
  </BrowserRouter>
)

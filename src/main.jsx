import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContext, CartProvider } from './context/CartProvider.jsx';
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById('root')).render(

<BrowserRouter>
<CartProvider>
  <Auth0Provider
      domain="dev-2bd7iwebdij6xb0s.us.auth0.com"
      clientId="flQX4Y5iRYu2uKfDHgmryzufs1LOAGFR"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>

  </CartProvider>
</BrowserRouter>
  

);

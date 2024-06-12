import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root.tsx';
import { CustomThemeProvider } from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import { CartProvider } from './context/CartContext/CartContext.tsx';
import { FavoritesProvider } from './context/FavoritesContext/FavoritesContext.tsx';
import { BurgerMenuContextProvider } from './context/BurgerMenuContext/BurgerMenuContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CartProvider>
        <FavoritesProvider>
          <BurgerMenuContextProvider>
            <CssBaseline />

            <Root />
          </BurgerMenuContextProvider>
        </FavoritesProvider>
      </CartProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
);

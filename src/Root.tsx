import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import {
  HomePage,
  NotFoundPage,
  ProductPage,
  CartPage,
  FavoritesPage,
  CategoryPage,
} from './pages';
import { ContactsPage } from './pages/ContactsPage';
import { RightsPage } from './pages/RightsPage';
import { SearchContextProvider } from './context/SearchContext';
import { ScrollToTop } from './utils/ScrollToTop';
import { useEffect, useState } from 'react';

export const Root = () => {
  const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorage = () => {
      setHasToken(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Router>
      <SearchContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route>
              <Route path="/phones" element={<CategoryPage />} />
              <Route path="/phones/:prodId?" element={<ProductPage />} />
            </Route>
            <Route>
              <Route path="/tablets" element={<CategoryPage />} />
              <Route path="/tablets/:prodId?" element={<ProductPage />} />
            </Route>
            <Route>
              <Route path="/accessories" element={<CategoryPage />} />
              <Route path="/accessories/:prodId?" element={<ProductPage />} />
            </Route>
            {hasToken && (
              <>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </>
            )}
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/rights" element={<RightsPage />} />
          </Route>
        </Routes>
      </SearchContextProvider>
    </Router>
  );
};

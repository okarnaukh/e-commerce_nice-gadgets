import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('');
  }

  return context;
};

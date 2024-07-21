import React,{useState} from 'react';
import { FavoriteProvider } from './FavouriteContext';
import Navigation from './Navigation';

const App = () => {
  const [username,setUsername]=useState('');
  return (
    
    <FavoriteProvider>
      <Navigation />
    </FavoriteProvider>
   
  );
};

export default App;
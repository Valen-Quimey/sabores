
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { fonts } from './src/global/fonts';


export default function App() {
  const [categorySelected, setCategorySelected] = useState('');

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) {
    return null
  }
  
  return (
    <>
     {categorySelected ?(
      <ItemListCategories/>
     ): (
      <Home setCategorySelected= {setCategorySelected} />
     )
     }
    </>
  );
}



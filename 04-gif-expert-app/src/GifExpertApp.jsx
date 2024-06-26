import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Hola"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory}/>
      {
        categories.map((category) => <GifGrid key={category} category={category}/>)
      }
    </>
  );
}

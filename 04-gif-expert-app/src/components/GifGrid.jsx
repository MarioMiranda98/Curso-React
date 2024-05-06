import React from 'react';
import { GifGridItem } from './index';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        (isLoading) && (<h2>Cargando...</h2>) 
      }
        <div className="card-grid">
        {
          images.map((gif) => <GifGridItem key={gif.id} {...gif} />)
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
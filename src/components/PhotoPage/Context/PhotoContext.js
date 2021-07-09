import React, { createContext, useState, useEffect } from 'react';

export const PhotoContext = createContext();

export const PhotoProvider = props => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(res => setPhotos(res.results))
        .catch(err => console.log(err));
    };

    fetchPhoto();
  }, []);

  return (
    <PhotoContext.Provider value={[photos, setPhotos]}>
      {props.children}
    </PhotoContext.Provider>
  );
};

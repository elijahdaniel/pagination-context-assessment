import React from 'react';
import { PhotoProvider } from './Context/PhotoContext';
import { ThemeProvider } from './Context/ThemeContext';
import PhotoList from './PhotoList';

function PhotoMain() {
  return (
    <ThemeProvider>
      <PhotoProvider>
        <PhotoList />
      </PhotoProvider>
    </ThemeProvider>
  );
}

export default PhotoMain;

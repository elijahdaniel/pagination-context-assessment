import React, { useContext, useState } from 'react';
import { PhotoContext } from './Context/PhotoContext';
import { ThemeContext } from './Context/ThemeContext';
import { Link } from 'react-router-dom';

const initialState = [
  {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Alexander',
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
  },
];

function PhotoList() {
  const [photos] = useContext(PhotoContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const [randomPhotos, setRandomPhotos] = useState(initialState);

  let fetchPhotos = () => {
    setRandomPhotos(
      photos.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 2)
    );
  };

  const themeStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div id='photo-list-container' style={themeStyle}>
      <Link to='/'>Back to Homepage</Link>

      {randomPhotos.map(item => {
        return (
          <div key={item.id}>
            <ul id='photos-list'>
              <li>
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} />
              </li>
            </ul>
          </div>
        );
      })}
      <section id='toggle-btns'>
        <button onClick={() => fetchPhotos()} id='fetch-photos'>
          Fetch photos
        </button>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          id='change-theme'>
          Change Theme
        </button>
      </section>
    </div>
  );
}

export default PhotoList;

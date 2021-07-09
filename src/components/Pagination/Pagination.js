import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let USER_URL = 'https://swapi.dev/api/people/';

function Pagination() {
  const [currentRoute, setCurrentRoute] = useState(1);
  const [results, setResults] = useState([]);
  const [disabledNext, setDisabledNext] = useState(0);
  const [disabledPrev, setDisabledPrev] = useState(0);

  const nextPage = () => {
    setCurrentRoute(currentRoute < 10 ? currentRoute + 1 : 9);
  };
  const prevPage = () => {
    setCurrentRoute(currentRoute > 1 ? currentRoute - 1 : 1);
  };

  useEffect(() => {
    fetch(`${USER_URL}?page=${currentRoute}`)
      .then(res => res.json())
      .then(res => {
        setResults(res.results);
        setDisabledNext(res.next);
        setDisabledPrev(res.previous);
      })
      .catch(err => console.log(err));
  }, [currentRoute]);

  return (
    <div className='pagination-container'>
      <Link to='/'>Back to Homepage</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.name.split(' ')[0]}</td>
                <td>
                  {user.name.split(' ')[1] ? user.name.split(' ')[1] : '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className='pagination'>
        <button
          className='first-page-btn'
          onClick={() => setCurrentRoute(1)}
          disabled={disabledPrev === null}>
          First
        </button>
        <button
          className='previous-page-btn'
          onClick={() => prevPage()}
          disabled={disabledPrev === null}>
          Prev
        </button>
        <button
          className='next-page-btn'
          onClick={() => nextPage()}
          disabled={disabledNext === null}>
          Next
        </button>
        <button
          className='last-page-btn'
          onClick={() => setCurrentRoute(9)}
          disabled={disabledNext === null}>
          Last
        </button>
      </section>
    </div>
  );
}

export default Pagination;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <p>Navigation</p>
      <section className='nav-links'>
        <Link to='/pagination'>Pagination</Link> |
        <Link to='/context'>Context</Link> |
        <a
          href='https://github.com/elijahdaniel/pagination-context-assessment'
          target='_blank'
          rel='noreferrer'>
          Code
        </a>
      </section>
    </nav>
  );
}

export default Home;

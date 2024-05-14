import React from 'react';
import MewImage from './Mew';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title-one">Welcome to the Pokemon Viewer</h1>
      <h2 className="title-two">The Pokemon page allows to search for pokemon by name</h2>
      <h2 className="title-two">The Mew page shows you my favorite pokemon</h2>
      <h2 className="title-two">The About page will be coming soon! You will be able to search for a specific pokemon card!</h2>
    </div>
  );
}

export default Home;
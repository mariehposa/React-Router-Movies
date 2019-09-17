import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id }`} key={movie.id}><span className="saved-movie">{movie.title}</span></NavLink>
    ))}
    <Link className="home-button" to='/'>Home</Link>
  </div>
);

export default SavedList;

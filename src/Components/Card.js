import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, linkTo }) {
  return (
    <Link to={linkTo} className="card-link"> {/* Link wraps the entire card */}
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-arrow">→</div> {/* Simple arrow for visual effect */}
      </div>
    </Link>
  );
}

export default Card;
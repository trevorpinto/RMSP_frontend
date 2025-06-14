// src/HomePage/Header.js
import React from 'react';
// import HeaderPage from '../components/HeaderPage'; // Temporarily commented out for this test
import Card from '../Components/Card'; // Make sure this is correctly imported
import { Link } from 'react-router-dom'; // Needed because Card uses Link internally

function displayHeader() {
  return (
    <>
      {/* Test Area for 3 Horizontal Cards */}
      <div style={{
        padding: '20px',
        border: '2px solid purple', // A new border color to distinguish from single card test
        margin: '20px',
        textAlign: 'center',
        display: 'flex',          // Enables Flexbox
        justifyContent: 'center', // Centers the cards horizontally
        gap: '20px',              // Adds space between the cards
        flexWrap: 'wrap'          // Allows cards to wrap to the next line on smaller screens
      }}>
        <Card
          key="test-card-1" // Unique key for each card in a list
          title="Faculty of Computer Science"
          description="This is the first card for testing horizontal layout."
          linkTo="/test-page-1"
        />
        <Card
          key="test-card-2" // Unique key
          title="Faculty of Health Sciences"
          description="Here's the middle card to see the spacing."
          linkTo="/test-page-2"
        />
        <Card
          key="test-card-3" // Unique key
          title="Faculty of Pocket Watching"
          description="And finally, the last card in our horizontal row."
          linkTo="/test-page-3"
        />
        <Link to="/" style={{display: 'block', marginTop: '10px'}}>Back to Home</Link>
      </div>

      {/* <HeaderPage/> */} {/* Temporarily commented out */}
    </>
  );
}

export default displayHeader;
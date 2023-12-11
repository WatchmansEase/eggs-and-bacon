import React, { useState, useEffect } from 'react';

function Listings() {
  const [listings, setListings] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const fetchListings = () => {
    fetch('http://localhost:5000/api/listings')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching listings:', error));
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/add-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        console.log('Listing added successfully');
        fetchListings(); // Refresh listings after adding new data
      } else {
        console.error('Failed to add listing');
      }
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register User</button>
      </form>
      <ul>
        {listings.map(listing => (
          <li key={listing._id}>
            {listing.name} - {listing.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
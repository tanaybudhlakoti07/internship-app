
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={ShowList} />
      <Route path="/details" component={ShowDetails} />
      <Route path="/booking" component={BookingForm} />
    </Router>
  );
};
document.addEventListener('DOMContentLoaded', function () {
  const showListContainer = document.getElementById('showList');
  const detailsContainer = document.getElementById('detailsContainer');
  const showDetailsContainer = document.getElementById('showDetails');
  const bookButton = document.getElementById('bookButton');
  const bookingFormContainer = document.getElementById('bookingFormContainer');
  const bookingForm = document.getElementById('bookingForm');

  // Sample data, you can replace this with your API data
  const shows = [
    { name: 'Show 1', genres: ['Drama'], language: 'English', summary: 'Show 1 summary...' },
    { name: 'Show 2', genres: ['Comedy'], language: 'Spanish', summary: 'Show 2 summary...' },
  ];

  // Display show list
  shows.forEach((show, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h2>${show.name}</h2>
      <p>Genre: ${show.genres.join(', ')}</p>
      <p>Language: ${show.language}</p>
      <button onclick="showDetails(${index})">Show Details</button>
    `;
    showListContainer.appendChild(listItem);
  });

  // Display show details
  window.showDetails = function (index) {
    const selectedShow = shows[index];
    showDetailsContainer.innerHTML = `
      <h2>${selectedShow.name}</h2>
      <p>Genre: ${selectedShow.genres.join(', ')}</p>
      <p>Language: ${selectedShow.language}</p>
      <p>${selectedShow.summary}</p>
    `;
    detailsContainer.style.display = 'block';
  };

  // Book button click event
  bookButton.addEventListener('click', function () {
    bookingFormContainer.style.display = 'block';
  });

  // Submit booking form
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission logic
    console.log('Booking Form Submitted');
  });
});


export default App;
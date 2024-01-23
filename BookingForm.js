import React from 'react';

const BookingForm = ({ movieName, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API request)
    // Close the form after submission
    onClose();
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" value={movieName} readOnly />
        </label>
        {/* Add other relevant details and form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
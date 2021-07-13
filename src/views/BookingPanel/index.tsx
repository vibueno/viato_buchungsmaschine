import React from 'react';

import BookingDetails from '../BookingDetails';
import BookingSummary from '../BookingSummary';

import './index.scss';

const BookingPanel = () => (
  <div className="booking-panel">
    <BookingDetails />
    <BookingSummary />
  </div>
);

export default BookingPanel;

import React from 'react';

import AvailableRooms from '../AvailableRooms';
import BookingSummary from '../BookingSummary';

import './index.scss';

const BookingPanel = () => (
  <div className="booking-panel">
    <AvailableRooms />
    <BookingSummary />
  </div>
);

export default BookingPanel;

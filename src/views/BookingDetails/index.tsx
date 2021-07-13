import React from 'react';

import BookingTabs from '../../components/BookingTabs';
import AvailableRooms from '../AvailableRooms';

import './index.scss';

const BookingDetails = () => (
  <>
    <div className="booking-details">
      <BookingTabs />
      <AvailableRooms />
    </div>
  </>
);

export default BookingDetails;

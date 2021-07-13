import React from 'react';

import BookingTabs from '../../components/BookingTabs';
import JourneyPlanning from '../JourneyPlanning';

import './index.scss';

const BookingDetails = () => (
  <>
    <div className="booking-details">
      <BookingTabs />
      <JourneyPlanning />
    </div>
  </>
);

export default BookingDetails;

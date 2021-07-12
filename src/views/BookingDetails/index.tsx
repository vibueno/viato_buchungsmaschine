import React from 'react';

import BookingTabs from '../../components/BookingTabs';
import InvoiceAddress from '../../views/InvoiceAddress';

import './index.scss';

const BookingDetails = () => (
  <>
    <div className="booking-details">
      <BookingTabs />
      <InvoiceAddress />
    </div>
  </>
);

export default BookingDetails;

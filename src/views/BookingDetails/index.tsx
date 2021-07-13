import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookingTabs from '../../components/BookingTabs';
import JourneyPlanning from '../../components/JourneyPlanning';
import AvailableRooms from '../../components/AvailableRooms';
import InvoiceAddress from '../../components/InvoiceAddress';

import './index.scss';

const BookingDetails = () => (
  <>
    <div className="booking-details">
      <BookingTabs />
      <Switch>
        <Route exact path="/availableroom">
          <AvailableRooms />
        </Route>
        <Route exact path="/invoiceaddress">
          <InvoiceAddress />
        </Route>
        <Route path="*">
          <JourneyPlanning />
        </Route>
      </Switch>
    </div>
  </>
);

export default BookingDetails;

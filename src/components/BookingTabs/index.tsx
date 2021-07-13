import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const BookingTabs = () => (
  <>
    <div className="booking-tabs">
      <div className="booking-tab">
        <NavLink to="/">1. Ihre Reiseplanung</NavLink>
      </div>
      <div className="booking-tab">
        <NavLink to="/availableroom">2. Verfügbare Zimmer</NavLink>
      </div>
      <div className="booking-tab">
        <NavLink to="/invoiceaddress">3. Rechnungsadresse</NavLink>
      </div>
    </div>
  </>
);

export default BookingTabs;

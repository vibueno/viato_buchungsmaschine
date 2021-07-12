import React from 'react';

import Button from '../../components/Button';

import './index.scss';

const BookingSummary = () => (
  <>
    <div className="booking-summary">
      <span className="text-underlined">Ihre Auswahl</span>
      <div className="booking-summary-btn-panel">
        <Button caption="Zurück" cssClass="btn-back" />
        <Button caption="Weiter" cssClass="btn-next" />
      </div>
    </div>
  </>
);

export default BookingSummary;

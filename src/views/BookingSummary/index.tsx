import React from 'react';

import Button from '../../components/Button';

import './index.scss';

const BookingSummary = () => (
  <>
    <div className="booking-summary">
      <div>
        <span className="booking-summary-title">Ihre Auswahl</span>
      </div>
      <div className="booking-summary-content">
        I am the content. I am the content. I am the content.
      </div>
      <div className="booking-summary-btn-panel">
        <Button caption="Zurück" cssClass="btn-back" />
        <Button caption="Weiter" cssClass="btn-next" />
      </div>
    </div>
  </>
);

export default BookingSummary;

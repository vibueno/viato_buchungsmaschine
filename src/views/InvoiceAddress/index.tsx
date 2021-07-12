import React from 'react';

import './index.scss';

const InvoiceAddress = () => (
  <>
    <div className="invoice-address-panel">
      <div className="field-group">
        <div className="label-group">
          <label htmlFor="first-name">Vorname</label>,&nbsp;
          <label htmlFor="last-name">Nachname</label>
        </div>

        <input id="first-name" type="text" />
        <input id="last-name" type="text" />
      </div>

      <div className="field-group">
        <div className="label-group">
          <label htmlFor="street">Straße</label>,&nbsp;
          <label htmlFor="number">Nr.</label>
        </div>

        <input id="street" type="text" />
        <input id="number" type="text" />
      </div>
      <div>
        <div className="field-group">
          <div className="label-group">
            <label htmlFor="postal-code">PLZ</label>,&nbsp;
            <label htmlFor="city">Ort</label>
          </div>

          <input id="postal-code" type="text" />
          <input id="city" type="text" />
        </div>
      </div>
    </div>
  </>
);

export default InvoiceAddress;

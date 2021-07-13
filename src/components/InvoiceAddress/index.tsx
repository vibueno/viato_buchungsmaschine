import React from 'react';

import './index.scss';

const InvoiceAddress = () => (
  <>
    <div className="invoice-address-panel">
      <div className="label-group">
        <label htmlFor="first-name">Vorname</label>,&nbsp;
        <label htmlFor="last-name">Nachname</label>
      </div>
      <div className="field-group">
        <input id="first-name" className="input-field-left" type="text" />
        <input id="last-name" className="input-field" type="text" />
      </div>
      <div className="label-group">
        <label htmlFor="street">Straße</label>,&nbsp;
        <label htmlFor="number">Nr.</label>
      </div>
      <div className="field-group">
        <input id="street" className="input-field-left" type="text" />
        <input id="number" className="input-field" type="text" />
      </div>
      <div className="label-group">
        <label htmlFor="postal-code">PLZ</label>,&nbsp;
        <label htmlFor="city">Ort</label>
      </div>

      <div className="field-group">
        <input id="postal-code" className="input-field-left" type="text" />
        <input id="city" className="input-field" type="text" />
      </div>
    </div>
  </>
);

export default InvoiceAddress;

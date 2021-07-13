import React from 'react';

import './index.scss';

const Guests = () => (
  <>
    Gästeanzahl
    <div className="guests">
      <label htmlFor="adults">Erwachsene</label>
      <input type="number" id="adults" defaultValue="1" min="1" />
      <label htmlFor="children">Kinder</label>
      <input type="number" id="children" defaultValue="0" min="0" />
    </div>
  </>
);

export default Guests;

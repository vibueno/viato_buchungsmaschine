import React from 'react';

import './index.scss';

const JourneyDates = () => (
  <>
    Reisezeitraum
    <div className="journey-dates">
      <div className="journey-start">
        <input type="date" />
      </div>
      <span className="text-user-input">bis</span>
      <div className="journey-end">
        <input type="date" />
      </div>
    </div>
  </>
);

export default JourneyDates;

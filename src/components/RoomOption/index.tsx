import React from 'react';

import './index.scss';
import Button from '../Button';

type RoomOptionProps = { caption: string; price: string };

const RoomOption = ({ caption, price }: RoomOptionProps) => (
  <>
    <div className="room-option">
      <div className="text-user-input">{caption}</div>
      <div className="text-user-input">{price}</div>
      <div className="room-option-btn-container">
        <Button caption="Wählen" cssClass="btn-room-option" />
      </div>
    </div>
  </>
);

export default RoomOption;

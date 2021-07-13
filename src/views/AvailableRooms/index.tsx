import React from 'react';
import RoomOption from '../../components/RoomOption';

import './index.scss';

const AvailableRooms = () => (
  <>
    <div className="available-rooms">
      <div className="room">
        <div className="room-title">Doppelzimmer mit Balkon</div>
        <RoomOption caption="Mit Frühstuck" price="250,00 €" />
        <RoomOption caption="Mit Vollpension" price="250,00 €" />
      </div>
      <div className="room">
        <div className="room-title">Doppelzimmer mit Seeblick</div>
        <RoomOption caption="Mit Frühstuck" price="300,00 €" />
        <RoomOption caption="Mit Vollpension" price="300,00 €" />
      </div>
    </div>
  </>
);

export default AvailableRooms;

import React from 'react';
import RoomOption from '../../components/RoomOption';

import './index.scss';

import data from '../../assets/data.json';

const {rooms} = data;
const {rates} = data;

const AvailableRooms = () => (
    <div className="available-rooms">
      {Object.keys(rooms).map(room => (
        <div className="room" key={room}>
          {rooms[room].name}
          <div className="room">
            <div className="room-title">Doppelzimmer mit Seeblick</div>
            <RoomOption caption="Mit Frühstuck" price="300,00 €" />
            <RoomOption caption="Mit Vollpension" price="300,00 €" />
          </div>
        </div>
      ))}
    </div>
  );

export default AvailableRooms;

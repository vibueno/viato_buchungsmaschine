import React from 'react';
import RoomOption from '../../components/RoomOption';

import './index.scss';

import data from '../../assets/data.json';

const rooms = data.rooms;
const rates = data.rates;

const AvailableRooms = () => {
  return (
    <div className="available-rooms">
      {Object.keys(rooms).map(room => (
        <div className="room" key={room}>
          {rooms[room].name}
        </div>
      ))}
    </div>
  );
};

export default AvailableRooms;

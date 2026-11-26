import { ROOM_TYPE } from '../../enums/type.enum.js';

export class RoomDto {
  id: number;
  isBooked: boolean;
  pricePerNight: number;
  numberOfRooms: number;
  type: ROOM_TYPE;
}

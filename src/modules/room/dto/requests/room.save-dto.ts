import { ROOM_TYPE } from '../../enums/type.enum.js';

export class RoomSaveDto {
  isBooked: boolean;
  pricePerNight: number;
  numberOfRooms: number;
  type: ROOM_TYPE;
}

import { Injectable } from '@nestjs/common';
import { RoomDto } from './responses/room.dto.js';
import { RoomSaveDto } from './requests/room.save-dto.js';
import { Room } from '../room.entity.js';

Injectable();
export class RoomsMapper {
  mapDtoToEntity(roomSaveDto: RoomSaveDto) {
    return Object.assign(new Room(), roomSaveDto);
  }

  mapEntityToDto(entity: Room): RoomDto {
    return Object.assign(new RoomDto(), entity);
  }

  mapEntityListToDtoList(entityList: Room[]): RoomDto[] {
    return entityList.map((policy) => this.mapEntityToDto(policy));
  }
}

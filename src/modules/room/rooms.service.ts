import { Injectable } from '@nestjs/common';
import { RoomsRepository } from './rooms.repository.js';
import { RoomsMapper } from './dto/rooms.mapper.js';
import { RoomSaveDto } from './dto/requests/room.save-dto.js';
import { RoomDto } from './dto/responses/room.dto.js';
import { RoomUpdateDto } from './dto/requests/room.update-dto.js';

Injectable();
export class RoomsService {
  constructor(
    private readonly repository: RoomsRepository,
    private readonly mapper: RoomsMapper,
  ) {}

  async createRoom(roomSaveDto: RoomSaveDto): Promise<RoomDto> {
    const entity = this.mapper.mapDtoToEntity(roomSaveDto);

    await this.repository.save(entity);
    return this.mapper.mapEntityToDto(entity);
  }

  async getAllBookedRooms(): Promise<RoomDto[]> {
    const rooms = await this.repository.findAllBookedRooms();
    return this.mapper.mapEntityListToDtoList(rooms);
  }

  async getAllFreeRooms(): Promise<RoomDto[]> {
    const rooms = await this.repository.findAllFreeRooms();
    return this.mapper.mapEntityListToDtoList(rooms);
  }

  async updateRoom(id: number, room: RoomUpdateDto) {
    const currentRoom = await this.repository.findById(id);

    if (currentRoom) {
      currentRoom.isBooked = room.isBooked;
      currentRoom.pricePerNight = room.pricePerNight;
      await this.repository.save(currentRoom);
    }
  }

  async bookRoom(id: number) {
    const currentRoom = await this.repository.findById(id);

    if (currentRoom && !currentRoom.isBooked) {
      currentRoom.isBooked = true;
      await this.repository.save(currentRoom);
    }
  }

  async freeRoom(id: number) {
    const currentRoom = await this.repository.findById(id);

    if (currentRoom) {
      currentRoom.isBooked = false;
      await this.repository.save(currentRoom);
    }
  }
}

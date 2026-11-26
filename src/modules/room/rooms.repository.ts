import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity.js';

@Injectable()
export class RoomsRepository {
  constructor(
    @InjectRepository(Room)
    private readonly repository: Repository<Room>,
  ) {}

  async save(room: Room) {
    this.repository.save(room);
  }

  async findAllBookedRooms(): Promise<Room[]> {
    return this.repository.find({ where: { isBooked: true } });
  }

  async findAllFreeRooms(): Promise<Room[]> {
    return this.repository.find({ where: { isBooked: false } });
  }

  async findById(id: number): Promise<Room | null> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async deleteById(id: number): Promise<void> {
    this.repository.delete(id);
  }
}

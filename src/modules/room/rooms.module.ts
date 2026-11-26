import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity.js';
import { RoomsService } from './rooms.service.js';
import { RoomsRepository } from './rooms.repository.js';
import { RoomsMapper } from './dto/rooms.mapper.js';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomsService, RoomsRepository, RoomsMapper],
  exports: [RoomsService, RoomsMapper],
})
export class RoomsModule {}

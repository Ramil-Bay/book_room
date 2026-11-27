import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';
import { UsersMapper } from './dto/users.mapper.js';
import { Room } from '../room/room.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Room]),
  ],
  providers: [UserRepository, UserService, UsersMapper,],
  exports: [UserService,],
})
export class UserModule {}

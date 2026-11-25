import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users.entity.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';
import { UserMapper } from './dto/user.mapper.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserRepository, UserService, UserMapper,],
  exports: [UserService,],
})
export class UserModule {}

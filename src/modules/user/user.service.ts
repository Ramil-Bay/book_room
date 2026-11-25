import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository.js';
import { User } from './users.entity.js';

import { UserDto } from './dto/responses/user.dto.js';
import { UserSaveDto } from './dto/requests/user.save-dto.js';
import { UserUpdateDto } from './dto/requests/user.update-dto.js';
import { UserMapper } from './dto/user.mapper.js';

@Injectable()
export class UserService {

  constructor(
    private readonly repository: UserRepository,
    private readonly mapper: UserMapper,
  ) {}

  async createUser(userSaveDto: UserSaveDto): Promise<UserDto> {

    const entity: User =
      this.mapper.mapDtoToEntity(userSaveDto);

    entity.active = true;

    await this.repository.save(entity);

    return this.mapper.mapEntityToDto(entity);

  }

  async getAllActiveUsers(): Promise<UserDto[]> {

    const users: User[] =
      await this.repository.findAllActive();

    return this.mapper.mapEntityListToDtoList(users);

  }

  async getActiveEntityById(id: number): Promise<User> {

    const user =
      await this.repository.findById(id);

    if (!user || !user.active) {
      throw new Error();
    }

    return user;

  }

  async getActiveUserById(id: number): Promise<UserDto> {

    const user: User =
      await this.getActiveEntityById(id);

    return this.mapper.mapEntityToDto(user);

  }

  async updateUser(
    id: number,
    updateDto: UserUpdateDto,
  ): Promise<void> {

    const user: User | null =
      await this.repository.findById(id);

    if (user) {

      user.name = updateDto.newName;

      await this.repository.save(user);

    }

  }

  async deleteUserById(id: number): Promise<void> {

    const user: User | null =
      await this.repository.findById(id);

    if (user) {

      user.active = false;

      await this.repository.save(user);

    }

  }

  async restoreUserById(id: number): Promise<void> {

    const user: User | null =
      await this.repository.findById(id);

    if (user && !user.active) {

      user.active = true;

      await this.repository.save(user);

    }

  }

}


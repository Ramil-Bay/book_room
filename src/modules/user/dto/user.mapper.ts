import { Injectable } from '@nestjs/common';

import { UserSaveDto } from './requests/user.save-dto.js';
import { UserDto } from './responses/user.dto.js';
import { User } from '../users.entity.js';

@Injectable()
export class UserMapper {

  mapDtoToEntity(userSaveDto: UserSaveDto): User {

    const entity: User = new User();

    entity.name = userSaveDto.name;
    entity.email = userSaveDto.email;
    entity.password = userSaveDto.password;
    entity.phone = userSaveDto.phone;
    entity.room = userSaveDto.room;

    return entity;

  }

  mapEntityToDto(entity: User): UserDto {

    if (!entity) {
      return new UserDto();
    }

    const dto: UserDto = new UserDto();

    dto.id = entity.id;
    dto.name = entity.name;
    dto.email = entity.email;
    dto.phone = entity.phone;
    dto.room = entity.room;
    

    return dto;

  }

  mapEntityListToDtoList(entityList: User[]): UserDto[] {

    return entityList.map(
      (userObj: User) => this.mapEntityToDto(userObj),
    );

  }

}
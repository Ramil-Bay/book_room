import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from './user.service.js';

import { UserSaveDto } from './dto/requests/user.save-dto.js';
import { UserUpdateDto } from './dto/requests/user.update-dto.js';
import { UserDto } from './dto/responses/user.dto.js';

@Controller('users')
export class UserController {

  constructor(
    private readonly service: UserService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUserRequest(
    @Body() userSaveDto: UserSaveDto,
  ): Promise<UserDto> {
    return await this.service.createUser(userSaveDto);
  }

  @Get()
  async getAllActiveUsersRequest(): Promise<UserDto[]> {
    return await this.service.getAllActiveUsers();
  }

  @Get(':id')
  async getUserByIdRequest(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserDto> {
    return await this.service.getActiveUserById(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateUserRequest(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UserUpdateDto,
  ): Promise<void> {
    await this.service.updateUser(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserRequest(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    await this.service.deleteUserById(id);
  }

  @Put(':id/restore')
  @HttpCode(HttpStatus.NO_CONTENT)
  async restoreUserRequest(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    await this.service.restoreUserById(id);
  }

}
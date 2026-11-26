import { Module } from '@nestjs/common';

import { DBModule } from './modules/user/utils/db.js';
import { UserModule } from './modules/user/user.modul.js';
import { RoomsModule } from './modules/room/rooms.module.js';

@Module({
  imports: [DBModule, UserModule, RoomsModule],
})
export class UsersModule {}

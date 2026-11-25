import { Module } from '@nestjs/common';

import { DBModule } from './modules/user/utils/db.js';
import { UserModule } from './modules/user/user.modul.js';

@Module({
  imports: [
    DBModule,
    UserModule,
  ],
})
export class UsersModule {}
import { TypeOrmModule } from '@nestjs/typeorm';

export const DBModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'book_room',
  autoLoadEntities: true,
  synchronize: true,
});

import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ROOM_TYPE } from './enums/type.enum.js';
import { User } from '../user/users.entity.js';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'numberOfRooms', nullable: false, unique: true })
  numberOfRooms: number;
  @Column({ name: 'type', nullable: false, type: 'enum', enum: ROOM_TYPE })
  type: ROOM_TYPE;
  @Column({ name: 'pricePerNight', nullable: false })
  pricePerNight: number;
  @Column({ name: 'isBooked' })
  isBooked: boolean;
  @OneToOne(() => User, (user: User) => user.room)
user: User;
}

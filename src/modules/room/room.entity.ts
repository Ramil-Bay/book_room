import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ROOM_TYPE } from './enums/type.enum.js';

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
}

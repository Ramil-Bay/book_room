import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ROOM_TYPE } from './enums/type.enum.js';
import { User } from '../user/user.entity.js';

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({name: "number",nullable: false, unique: true})
  number: number;
  @Column({ name: 'number_of_rooms', nullable: false, unique: true })
  numberOfRooms: number;
  @Column({ name: 'type', nullable: false, type: 'enum', enum: ROOM_TYPE })
  type: ROOM_TYPE;
  @Column({ name: 'price_per_night', nullable: false })
  pricePerNight: number;
  @Column({ name: 'is_booked' })
  isBooked: boolean;

}

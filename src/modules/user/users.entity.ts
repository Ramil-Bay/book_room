import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', nullable: false, unique: false })
  name: string;

  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ name: 'password', nullable: false, unique: false })
  password: string;

  @Column({ name: 'phone', nullable: false, unique: true })
  phone: string;

  @Column({ name: 'room', nullable: true, unique: true })
  room: string;

  @Column({ name: 'active', nullable: false, unique: false, default: true })
  active: boolean;

}
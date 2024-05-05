import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({name: 'name', nullable: false})
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
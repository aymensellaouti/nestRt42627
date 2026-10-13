/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity('section')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 50,
  })
  section: string;
  @Column()
  level: number;
  @CreateDateColumn({
    name: 'created_at',
    update: false,
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date;
  @DeleteDateColumn({
    name: 'deleted_at'
  })
  deletedAt: Date;
  @VersionColumn()
  version: number;
}

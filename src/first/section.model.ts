import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('section')
export class Section {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50
    })
    section: string;
    @Column()
    level: number;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currency')
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
    type: 'varchar',
    length: 3,
    transformer: {
      to(value: string): string {
        return value.toUpperCase();
      },
      from(value: string): string {
        return value.toUpperCase();
      },
    },
  })
  code: string;

  @Column({ nullable: false })
  name: string;
}


import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

// This table will store 
// Users who are Committee Members 
// they will login to the platform and do bookings etc

@Entity()
export class ProfileUsers extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column('varchar', { length: 100 })
		userId: string; // F.Key
}

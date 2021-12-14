
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Profiles } from './Profiles';

// This table will store 
// Users who are Committee Members 
// they will login to the platform and do bookings etc

@Entity()
export class ProfileUsers extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;
	
	@ManyToOne(() => Profiles, profile => profile.profileUser)
		profiles: Profiles;
}

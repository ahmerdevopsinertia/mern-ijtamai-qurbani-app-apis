import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { UserRoles } from './UserRoles';
import { UserAuthTokens } from './UserAuthTokens';

// First Super Admin will create
// Users than utilize these Users 
// to attach the Profile Committe
// Because Profile Committe will register bookings

@Entity()
export class Users extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column('varchar', { length: 100 })
		userRoleId: string;
	
	@OneToOne(() => UserRoles)
	@JoinColumn()
		role: UserRoles;

	@Column({
		type: 'varchar', length: 25
	})
		firstName: string;

	@Column({
		type: 'varchar', length: 25, nullable: true
	})
		lastName: string;

	@Column({
		type: 'varchar', length: 25, unique: true,
	})
		mobileNumber: string;

	@Column({ type: 'varchar', length: 25, unique: true, nullable: true })
		email: string;

	@Column({ type: 'varchar', length: 25 })
		password: string;

	@Column('varchar', { length: 100 })
		createdById: string; // save the AdminUserId who created this record. It is just for the activity log purpose

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
	
	@OneToMany(() => UserAuthTokens, token => token.user)
		authTokens: UserAuthTokens[];
}

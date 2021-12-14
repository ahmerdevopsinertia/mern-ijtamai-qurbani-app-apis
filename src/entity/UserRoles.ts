import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserRoles extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;
	
	@Column({
		type: 'varchar', length: 25
	})
		name: string;

	@Column('simple-array')
		permissionCodes: string[]; // put from permission table

	@Column('simple-array')
		permissionDisplayNames: string[]; // put from permission table
}

// EDITOR = 'editor', // committee member will be the editor
// VIEWER = 'viewer',

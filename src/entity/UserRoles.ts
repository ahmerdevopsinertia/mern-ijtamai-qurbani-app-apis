import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

export enum UserRole {
	EDITOR = 'editor', // committee member will be the editor
	VIEWER = 'viewer',
}

@Entity()
export class Users extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column('simple-array')
		permissionCodes: string[]; // put from permission table

	@Column('simple-array')
		permissionDisplayNames: string[]; // put from permission table
}

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export enum UserRole {
	EDITOR = 'editor', // committee member will be the editor
	VIEWER = 'viewer',
}

@Entity()
export class Permissions extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column({
		type: 'string',
		length: 25
	})
		permissionCode: string; // Create Booking || Update Booking

	@Column({
		type: 'string',
		length: 25
	})
		permissionDisplayName: string; // Create Booking || Update Booking

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
}

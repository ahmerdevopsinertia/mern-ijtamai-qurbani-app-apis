import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class AdminUsers extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

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
}

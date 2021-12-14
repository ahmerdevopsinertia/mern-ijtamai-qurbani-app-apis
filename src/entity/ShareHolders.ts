import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

// Apply Filter using the name or mobile number while adding share holders on the booking
// Think of uniqueness issue

@Entity()
export class ShareHolders extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column({
		type: 'varchar', length: 50
	})
		firstName: string;

	@Column({
		type: 'varchar', length: 50, nullable: true
	})
		lastName: string;

	@Column({
		type: 'varchar', length: 50, nullable: true
	})
		fatherHusbandName: string; // put father name or husband name if mentioned

	@Column({
		type: 'varchar', length: 25, unique: true, // must be unique and mandatory as will be use in filteration
	})
		contactNumberOne: string;

	@Column({
		type: 'varchar', length: 25, nullable: true
	})
		contactNumberTwo: string; // can contain mobile number or ptcl number

	@Column({ type: 'varchar', length: 25, unique: true, nullable: true })
		email: string;

	@Column({ type: 'varchar', length: 500, nullable: true })
		address: string;

	@Column({ type: 'varchar', length: 25, nullable: true })
		referenceOfName: string; // who referred the share holder put the name here

	@Column({ type: 'varchar', length: 25, nullable: true })
		referenceOfContactNumber: string; // who referred the share holder put contact details here

	@Column('varchar', { length: 100 })
		createdById: string; // save the AdminUserId who created this record. It is just for the activity log purpose

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
}

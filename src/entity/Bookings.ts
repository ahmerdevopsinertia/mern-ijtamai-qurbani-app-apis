import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { BookingDetails } from './BookingDetails';

export enum BookingCategory {
	ASAAN = 'asaan',
	NORMAL = 'normal'
}

export enum AnimalType {
	GAEY = 'gaey',
	BAKRA = 'bakra',
	DUMBA = 'dumba',
	Ount = 'ount'
}

export enum FormStatus { // For developer
	DRAFT = 'draft',
	FINAL = 'final',
}

@Entity()
export class Bookings extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column('varchar', { length: 100 })
		profileId: string;

	@Column({ type: 'varchar', length: 25, unique: true })
		bookingNumber: string; // 1,2,3 

	@Column({
		type: 'set',
		enum: BookingCategory,
	})
		category: BookingCategory[];

	@Column({
		type: 'set',
		enum: AnimalType,
	})
		animalType: AnimalType[];

	@Column({
		type: 'set',
		enum: FormStatus,
		default: [FormStatus.DRAFT]
	})
		formStatus: FormStatus[]; // For developer checks in order to provide draft and final feature to end users,

	@Column({ type: 'boolean', default: false })
		isCowComplete: boolean; // means if 7 share holders are completed or not, it will be mark as complete only if 7 shared holders are there and payment is received

	@Column({ type: 'boolean', default: false })
		cowShareCount: boolean; // for developer checks, incremental number, it should be min 1 and max 7

	@Column('varchar', { length: 100 })
		createdById: string; // save the AdminUserId who created this record. It is just for the activity log purpose

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
	
	@OneToMany(() => BookingDetails, booking => booking.bookings)
		bookingDetails: BookingDetails[];
}

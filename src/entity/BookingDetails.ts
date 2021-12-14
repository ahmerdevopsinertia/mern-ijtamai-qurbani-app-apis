import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Bookings } from './Bookings';
import { ShareHolders } from './ShareHolders';

// This entity will store share holder 
// info for all categories such as Cow, Bakra etc
// For booking a cow or camel 7 records will be added 
// For booking Goat or Sheep 1 record each will be added

export enum BookingStatus {
	PAID = 'paid',
	NOTPAID = 'notpaid',
	CANCELLED = 'cancelled',
}

export enum DeliveryStatus {
	DELIVERED = 'delivered',
	PENDING = 'pending',
}

@Entity()
export class BookingDetails extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
		id: number;

	@ManyToOne(() => Bookings, booking => booking.bookingDetails)
		bookings: Bookings;

	@ManyToOne(() => ShareHolders, share => share.shareHolders)
		shareHolders: ShareHolders;

	@Column({ type: 'varchar', length: 25, nullable: true })
		referenceOfName: string; // who referred the share holder put the name here

	@Column({ type: 'varchar', length: 25, nullable: true })
		referenceOfContactNumber: string; // who referred the share holder put contact details here

	@Column({
		type: 'set',
		enum: BookingStatus,
		default: [BookingStatus.NOTPAID]
	})
		bookingStatus: BookingStatus[];

	@Column({
		type: 'set',
		enum: DeliveryStatus,
		default: [DeliveryStatus.PENDING]
	})
		deliveryStatus: DeliveryStatus[];

	@Column({ type: 'boolean', default: true })
		isSelfPickup: boolean; // means self pickup or delivery required

	@Column({
		type: 'string',
		length: 250,
		nullable: true
	})
		bookingRequirement: string; // such as Paya Chahe hai, Kaleeji nahi chahye hai etc
}

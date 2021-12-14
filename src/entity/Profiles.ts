import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { AdminUsers } from './AdminUsers';
import { Areas } from './Areas';
import { ProfileUsers } from './ProfileUsers';

// This table will help in formatting Qurbani receipts as well

@Entity()
export class Profiles extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@ManyToOne(() => AdminUsers, adminUser => adminUser.profile)
		adminUser: AdminUsers;
	
	@ManyToOne(() => Areas, area => area.profile)
		area: Areas;

	@Column({
		type: 'string',
		length: 100,
		default: 'ALKHIDMAT IJTAMAI QURBANI HALQA GULSHAN E UMAIR'
	})
		title: string; // any general remarks ... such as Alkhidmat Welfare Society etc

	@Column({
		type: 'string',
		length: 15
	})
		bookingYear: string; // to store the profile year

	@Column({
		type: 'date',
		length: 25
	})
		bookingFullDate: Date; // to store the full date

	@Column({
		type: 'string',
		length: 25
	})
		inchargeName: string;

	@Column({
		type: 'string',
		length: 500,
		nullable: true
	})
		bookingOffice: string; // Shop # 7 Tulip Tower

	@Column({
		type: 'string',
		length: 500,
		nullable: true
	})
		qurbaniLocation: string; // Tuplip Tower main road

	@Column({
		type: 'string',
		length: 500,
		nullable: true
	})
		description: string; // any general remarks ... such as Alkhidmat Welfare Society etc

	@Column({
		type: 'varchar',
		length: 15,
		default: 'PKR'
	})
		currencyName: string; // means PKR or USD

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		deliveryCharges: number; // means delivery charges for e.g 200 PKR

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		normalCowShare: number; // means amount 150000

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		asaanCowShare: number; // means amount 120000, if null means we do not do this type of Qurbani

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		bakra: number; // means amount 120000

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		dumba: number; // means amount 120000

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		ountShare: number; // means amount 120000, if null means we do not do this type of Qurbani

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		normalCowQasaiRate: number;// means what we have decided what to pay for Normal Cow to Qasai

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		asaanCowQasaiRate: number; // means what we have decided what to pay for Asaan Cow to Qasai

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		bakraQasaiRate: number; // means what we have decided what to pay for Bakra to Qasai

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		dumbaQasaiRate: number; // means what we have decided what to pay for Dumba to Qasai

	@Column({
		type: 'int',
		length: 11,
		nullable: true,
	})
		ountQasaiRate: number; // means what we have decided what to pay for Ount to Qasai

	@Column({
		type: 'varchar',
		length: 500,
		nullable: true,
	})
		profileLogo: string; // Logo url to print on receipts

	@Column({
		type: 'varchar',
		length: 500,
		nullable: true,
	})
		otherAttachment: string; // Any extra logo or icon such as to place the Tarazu icon on receipt

	@Column({
		type: 'varchar',
		length: 50,
		nullable: true
	})
		qurbaniAccountNumber: string;

	@Column({
		type: 'varchar',
		length: 100,
		nullable: true
	})
		qurbaniAccountTitle: string;

	@Column('simple-array')
		instructions: string[]; // take array from F.E such as Khaal Alkhidmat ko Jaaegi etc ..

	@Column('varchar', { length: 100 })
		createdById: string; // save the AdminUserId who created this record. It is just for the activity log purpose

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
	
	@OneToMany(() => ProfileUsers, user => user.profiles)
		profileUser: ProfileUsers[];
}

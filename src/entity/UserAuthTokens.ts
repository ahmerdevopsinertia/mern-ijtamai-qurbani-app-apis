import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm';

@Entity()
export class UserAuthTokens extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column({ type: 'varchar', length: 100, nullable: true })
		userId: string;

	@Column({ type: 'varchar', length: 100, unique: true })
		token: string;

	@Column({ type: 'timestamp' })
		expiry: Date;

	@CreateDateColumn()
		createdDate: Date;
}

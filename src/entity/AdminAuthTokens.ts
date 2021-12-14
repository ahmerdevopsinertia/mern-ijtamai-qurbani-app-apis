import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, ManyToOne } from 'typeorm';
import { AdminUsers } from './AdminUsers';

@Entity()
export class AdminAuthTokens extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;
	
	@ManyToOne(() => AdminUsers, user => user.authTokens)
		adminUser: AdminUsers;

	@Column({ type: 'varchar', length: 100, unique: true })
		token: string;

	@Column({ type: 'timestamp' })
		expiry: Date;

	@CreateDateColumn()
		createdDate: Date;
}

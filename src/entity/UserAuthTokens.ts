import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Entity()
export class UserAuthTokens extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
		id: number;
	
	@ManyToOne(() => Users, user => user.authTokens)
		user: Users;

	@Column({ type: 'varchar', length: 100, unique: true })
		token: string;

	@Column({ type: 'timestamp' })
		expiry: Date;

	@CreateDateColumn()
		createdDate: Date;
}

// Sample Entry

// Syed Village Circle, Halqa Gulshan Umair, Elaqa Johar, Zila Airport, Karachi, Pakistan
// Gulberg Circle, Halqa FB Area Block 2, Elaqa FB Area, Zila Wasti, Karachi, Pakistan

// In Actual      Team Type

// 1 Pakistan         Mulk           NULL
// 2 Sindh            Sooba           1
// 3 Karachi          Shehar          2
// 4 Zila Airport     Zila            3
// 5 Elaqa Johar      Elaqa           4
// 6 Halqa G.U        Halqa           5
// 7 Syed Village     Circle          6
// 8 Bilawal Jokhio   Circle          6
// 9 G.Umair          Circle          6

// On Profile Form we will show Team Type field which filter the area

import {
	Entity, PrimaryGeneratedColumn, Column, BaseEntity,
	CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany
} from 'typeorm';

export enum TeamType {
	CIRCLE = 'circle',
	HALQA = 'halqa',
	ELAQA = 'elaqa',
	ZILA = 'zila',
	SHEHAR = 'shehar',
	SOOBA = 'sooba',
	MULK = 'mulk'
}

@Entity()
export class Areas extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
		id: number;

	@Column({
		type: 'string',
		length: 50,
		default: 'Karachi'
	})
		areaName: string;

	@Column({
		type: 'set',
		enum: TeamType,
	})
		teamType: TeamType[];

	@ManyToOne(type => Areas, area => area.children)
		parent: Areas;

	@OneToMany(type => Areas, area => area.parent)
		children: Areas[];

	@CreateDateColumn()
		createdDate: Date;

	@UpdateDateColumn()
		updatedDate: Date;

	@DeleteDateColumn()
		deletedDate: Date;
}

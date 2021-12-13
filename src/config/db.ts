import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ormConfigDev, ormConfigQa } from './ormconfig';
import colors from 'colors';

const dbConnection = async () => {
	let ormConfig = null;
	if (process.env.NODE_ENV == 'development') {
		ormConfig = ormConfigDev;
	}
	if (process.env.NODE_ENV == 'qa') {
		ormConfig = ormConfigQa;
	}
	const dbConnection = await createConnection(ormConfig).catch(error => {
		console.log(colors.red(`Database failed to connect ${error.message}`));
		return;
	});

	if (dbConnection) {
		console.log(colors.blue(`Database successfully connected on Port ${process.env.DB_PORT}`));
		return;
	}
};

export default dbConnection;
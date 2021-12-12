import "reflect-metadata";
import { createConnection } from "typeorm";
import { ormConfigDev, ormConfigQa } from './ormconfig'

const dbConnection = async () => {
    let ormConfig = null;
    if (process.env.NODE_ENV == 'development') {
        ormConfig = ormConfigDev
    }
    if (process.env.NODE_ENV == 'qa') {
        ormConfig = ormConfigQa
    }
    await createConnection(ormConfig).catch(error => console.log(`DATABASE failed to connect ${error.message}`))
};

export default dbConnection;
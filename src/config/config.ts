import dotenv from 'dotenv';
import { resolve } from 'path';

// const config = 
const config = () => {
	dotenv.config({
		path: resolve(__dirname, `../../.env_${process.env.NODE_ENV}`)
	});
};

export default config;
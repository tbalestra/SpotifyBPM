import dotenv from 'dotenv';
dotenv.config({ path: `config/${process.env.NODE_ENV}.env` });

import mysql from 'mysql-await';

const connectionArgs = {
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
};


const pool = mysql.createPool(connectionArgs);

export default pool;
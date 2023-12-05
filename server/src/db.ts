import mysql from 'mysql';
import sqlConfig from './config/mysql.config';

const db = mysql.createPool(sqlConfig);

export default db;
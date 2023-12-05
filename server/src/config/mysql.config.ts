import dotenv from 'dotenv';

dotenv.config();

const sqlConfig = {
    host: '127.0.0.1',
    user: 'admin',
    password: process.env.SQLPASSWORD,
    database: 'todo_list20231206'
};

export default sqlConfig;
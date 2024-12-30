import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "futscript",
    password: "123456",
    port: 5432,
});

export const query = (text, params) => pool.query(text, params);

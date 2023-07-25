import { Sequelize } from "sequelize";

const db = new Sequelize('Agencia Viajes Navas', 'root', 'rootroot', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        main: 0,
        acquire: 30000,
        idle: 10000

    },
});

export default db;

import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    hostame: "localhost",
    dialect: "postgres",
    database: "teste",
    username: "postges",
    password: "postgres"
});


export default sequelize
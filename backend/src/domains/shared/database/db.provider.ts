/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */

import {ConnectionOptions} from "typeorm";
import * as env from 'dotenv';
env.config();
import {InstitutionEntity} from "../../institution/infrastructure/database/InstitutionEntity";

const dbConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    entities: [InstitutionEntity],
    database: process.env.DB_NAME || 'nosk_alumini_network',
    synchronize: process.env.NODE_ENV === 'development', // Synchronize only in development
    logging: process.env.NODE_ENV === 'development', // Enable logging only in development
};

export default dbConfig;
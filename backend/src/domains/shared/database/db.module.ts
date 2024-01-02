/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './db.provider';

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
    ]
})

export class DbModule {}
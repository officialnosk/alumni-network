/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './DBProvider';

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
    ]
})

export class DBModule {}
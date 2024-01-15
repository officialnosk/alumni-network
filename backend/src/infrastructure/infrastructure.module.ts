import { Module } from '@nestjs/common';
import {DBModule} from "./database/provider/DBModule";

@Module({
    imports: [DBModule]
})
export class InfrastructureModule {}

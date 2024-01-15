import { Module } from '@nestjs/common';
import {InstitutionService} from "../application/service/InstitutionService";

@Module({
    providers: [InstitutionService],
    exports: [InstitutionService]
})
export class CoreModule {}

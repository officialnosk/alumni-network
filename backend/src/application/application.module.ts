import { Module } from '@nestjs/common';
import {CoreModule} from "../core/core.module";
import {InstitutionController} from "./controller/InstitutionController";

@Module({
    imports: [CoreModule],
    controllers: [InstitutionController],

})
export class ApplicationModule {}

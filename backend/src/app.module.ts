import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './domains/hello/HelloModule';
import { AccountModule } from './domains/account/AccountModule';
import {DbModule} from "./domains/shared/database/db.module";

@Module({
  imports: [HelloModule, AccountModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

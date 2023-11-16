import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './domains/hello/HelloModule';
import { AccountModule } from './domains/account/AccountModule';

@Module({
  imports: [HelloModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

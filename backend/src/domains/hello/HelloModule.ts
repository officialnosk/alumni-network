import { Module } from '@nestjs/common';
import { HelloController } from './application/web/RestController';
import { HelloService } from './application/HelloService';
import { MockFetchHelloAdapter } from './infrastructure/MockFetchHelloAdapter';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import {
  HelloRepositoryPort,
  OutgoingPortEnum,
} from './core/ports/OutgoingPort';
import { DisplayHelloUseCase } from './core/DisplayHelloUseCase';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [
    {
      provide: IncomingPortEnum.DisplayHelloPort,
      useFactory: (respository: HelloRepositoryPort) => {
        return new DisplayHelloUseCase(respository);
      },
      inject: [OutgoingPortEnum.FetchHelloRepositoryPort],
    },
    {
      provide: OutgoingPortEnum.FetchHelloRepositoryPort,
      useClass: MockFetchHelloAdapter,
    },
    HelloService,
  ],
})
export class HelloModule {}

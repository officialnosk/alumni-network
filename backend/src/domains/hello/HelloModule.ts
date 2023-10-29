import { Module } from '@nestjs/common';
import { HelloController } from './application/web/RestController';
import { HelloService } from './application/HelloService';
import { MockFetchHelloAdapter } from './infrastructure/MockFetchHelloAdapter';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import { HelloRepository, OutgoingPortEnum } from './core/ports/OutgoingPort';
import { DisplayHelloAdapter } from './core/DisplayHelloUseCase';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [
    {
      provide: IncomingPortEnum.DisplayHelloUseCase,
      useFactory: (respository: HelloRepository) => {
        return new DisplayHelloAdapter(respository);
      },
      inject: [OutgoingPortEnum.HelloRepository],
    },
    {
      provide: OutgoingPortEnum.HelloRepository,
      useClass: MockFetchHelloAdapter,
    },
    HelloService,
  ],
})
export class HelloModule {}

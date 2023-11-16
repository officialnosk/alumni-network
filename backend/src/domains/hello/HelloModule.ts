import { Module } from '@nestjs/common';
import { HelloController } from './application/web/RestController';
import { HelloService } from './application/HelloService';
import { MockHelloRepository } from './infrastructure/MockHelloRepository';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import { HelloRepository, OutgoingPortEnum } from './core/ports/OutgoingPort';
import { DisplayHelloAdapter } from './core/DisplayHelloUseCase';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [
    {
      provide: IncomingPortEnum.DisplayHelloUseCase,
      useFactory: (repository: HelloRepository) => {
        return new DisplayHelloAdapter(repository);
      },
      inject: [OutgoingPortEnum.HelloRepository],
    },
    {
      provide: OutgoingPortEnum.HelloRepository,
      useClass: MockHelloRepository,
    },
    HelloService,
  ],
})
export class HelloModule {}

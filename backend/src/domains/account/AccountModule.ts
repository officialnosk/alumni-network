import { Module } from '@nestjs/common';
import { AccountRestController } from './application/web/RestController';
import { AccountService } from './application/service/AccountService';
import { AccountMockRepository } from './infrastructure/persistence/MockRepository';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from './core/ports/OutgoingPort';
import { CreateAccountUseCase } from './core/usecases/CreateAccountUseCase';
import { FetchAccountUseCase } from './core/usecases/FetchAccountUseCase';

@Module({
  imports: [],
  controllers: [AccountRestController],
  providers: [
    {
      provide: IncomingPortEnum.CreateAccountPort,
      useFactory: (respository: AccountRepository) => {
        return new CreateAccountUseCase(respository);
      },
      inject: [OutgoingPortEnum.AccountRepository],
    },
    {
      provide: IncomingPortEnum.FetchAccountPort,
      useFactory: (respository: AccountRepository) => {
        return new FetchAccountUseCase(respository);
      },
      inject: [OutgoingPortEnum.AccountRepository],
    },
    {
      provide: OutgoingPortEnum.AccountRepository,
      useClass: AccountMockRepository,
    },
    AccountService,
  ],
})
export class AccountModule {}

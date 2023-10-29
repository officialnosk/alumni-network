import { Module } from '@nestjs/common';
import { AccountRestController } from './application/web/RestController';
import { AccountService } from './application/service/AccountService';
import { AccountMockRepository } from './infrastructure/persistence/MockRepository';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from './core/ports/OutgoingPort';
import { CreateAccountAdapter } from './core/usecases/CreateAccountUseCase';
import { FetchAccountAdapter } from './core/usecases/FetchAccountUseCase';

@Module({
  imports: [],
  controllers: [AccountRestController],
  providers: [
    {
      provide: IncomingPortEnum.CreateAccountUseCase,
      useFactory: (respository: AccountRepository) => {
        return new CreateAccountAdapter(respository);
      },
      inject: [OutgoingPortEnum.AccountRepository],
    },
    {
      provide: IncomingPortEnum.FetchAccountUseCase,
      useFactory: (respository: AccountRepository) => {
        return new FetchAccountAdapter(respository);
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

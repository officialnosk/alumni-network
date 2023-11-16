import { Module } from '@nestjs/common';
import { AccountRestController } from './application/web/RestController';
import { AccountService } from './application/service/AccountService';
import { AccountMockRepository } from './infrastructure/persistence/MockRepository';
import { IncomingPortEnum } from './core/ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from './core/ports/OutgoingPort';
import { CreateAccountAdapter } from './core/usecases/CreateAccountUseCase';
import { FetchAccountAdapter } from './core/usecases/FetchAccountUseCase';
import { DeleteAccountAdapter } from './core/usecases/DeleteAccountUseCase';

@Module({
  imports: [],
  controllers: [AccountRestController],
  providers: [
    {
      provide: IncomingPortEnum.CreateAccountUseCase,
      useFactory: (repository: AccountRepository) => {
        return new CreateAccountAdapter(repository);
      },
      inject: [OutgoingPortEnum.AccountRepository],
    },
    {
      provide: IncomingPortEnum.FetchAccountUseCase,
      useFactory: (repository: AccountRepository) => {
        return new FetchAccountAdapter(repository);
      },
      inject: [OutgoingPortEnum.AccountRepository],
    },
    {
      provide: IncomingPortEnum.DeleteAccountUseCase,
      useFactory: (repository: AccountRepository) => {
        return new DeleteAccountAdapter(repository);
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

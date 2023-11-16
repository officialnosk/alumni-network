import { Inject } from '@nestjs/common';
import { Account } from '../models/Account';
import { CreateAccountUseCase } from '../ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from '../ports/OutgoingPort';

export class CreateAccountAdapter implements CreateAccountUseCase {
  constructor(
    @Inject(OutgoingPortEnum.AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {
    this.accountRepository = accountRepository;
  }

  async createAccount(account: Account) {
    // todo: check if account already exists
    return this.accountRepository.createAccount(account);
  }
}

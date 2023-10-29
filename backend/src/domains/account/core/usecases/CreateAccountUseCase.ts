import { Inject } from '@nestjs/common';
import { Account } from '../models/Account';
import { CreateAccountPort } from '../ports/IncomingPort';
import { OutgoingPortEnum } from '../ports/OutgoingPort';

export class CreateAccountUseCase implements CreateAccountPort {
  constructor(
    @Inject(OutgoingPortEnum.AccountRepository)
    private readonly accountRepository: CreateAccountPort,
  ) {
    this.accountRepository = accountRepository;
  }

  async createAccount(account: Account) {
    // todo: check if account already exists
    return this.accountRepository.createAccount(account);
  }
}

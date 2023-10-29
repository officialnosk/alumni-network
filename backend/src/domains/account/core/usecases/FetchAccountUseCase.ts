import { Inject } from '@nestjs/common';
import { Account } from '../models/Account';
import { FetchAccountPort } from '../ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from '../ports/OutgoingPort';

export class FetchAccountUseCase implements FetchAccountPort {
  constructor(
    @Inject(OutgoingPortEnum.AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}

  async fetchAccount(accountId: string): Promise<Account> {
    return await this.accountRepository.fetchAccount(accountId);
  }
  async fetchAllAccounts() {
    try {
      return await this.accountRepository.fetchAllAccounts();
    } catch (error) {
      return [];
    }
  }
}

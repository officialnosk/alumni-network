import { Inject } from '@nestjs/common';
import { Account } from '../models/Account';
import { FetchAccountUseCase } from '../ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from '../ports/OutgoingPort';

export class FetchAccountAdapter implements FetchAccountUseCase {
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

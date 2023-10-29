import { Account } from '../../core/models/Account';
import { AccountRepository } from '../../core/ports/OutgoingPort';

export class AccountMockRepository implements AccountRepository {
  private accounts: Account[] = [];

  async createAccount(account: Account): Promise<Account> {
    this.accounts.push(account);
    return account;
  }

  async fetchAccount(accountId: string): Promise<Account> {
    return this._findAccount(accountId);
  }

  async fetchAllAccounts(): Promise<Account[]> {
    return this._findAllAccounts();
  }

  private _findAccount(accountId: string): Promise<Account> {
    return new Promise((resolve, reject) => {
      const result = this.accounts.find((account) => account.id === accountId);
      if (!result) {
        reject(new Error('Account not found'));
      }
      resolve(result);
    });
  }

  private _findAllAccounts(): Promise<Account[]> {
    return new Promise((resolve) => {
      resolve(this.accounts);
    });
  }
}

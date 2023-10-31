import { Account, Role } from '../../core/models/Account';
import { Account as AccountEntity } from '../entities/Account';
import { AccountRepository } from '../../core/ports/OutgoingPort';
import { AccountNotFound } from '../../core/exceptions/AccountNotFound';

export class AccountMockRepository implements AccountRepository {
  private accounts: AccountEntity[] = [];

  async createAccount(account: Account): Promise<Account> {
    this.accounts.push(this._toEntity(account));
    return account;
  }

  async fetchAccount(accountId: string): Promise<Account> {
    return this._findAccount(accountId);
  }

  async fetchAllAccounts(): Promise<Account[]> {
    return this._findAllAccounts();
  }

  async deleteAccount(accountId: string): Promise<void> {
    try {
      await this._findAccount(accountId);
      this.accounts = this.accounts.filter(
        (account) => account.id !== accountId,
      );
    } catch (error) {
      if (error instanceof AccountNotFound) {
        throw new AccountNotFound();
      } else {
        throw new Error('Unable to Delete Account');
      }
    }
  }

  private async _findAccount(accountId: string): Promise<Account> {
    const result = this.accounts.find((account) => account.id === accountId);
    if (!result?.id) {
      throw new AccountNotFound();
    }
    return this._toModel(result);
  }

  private _findAllAccounts(): Promise<Account[]> {
    return new Promise((resolve) => {
      resolve(this.accounts.map((entity) => this._toModel(entity)));
    });
  }

  private _toEntity(account: Account): AccountEntity {
    const entity = new AccountEntity();
    entity.id = account.id;
    entity.userName = account.userName;
    entity.role = account.role;
    entity.password = account.password;
    entity.email = account.email;
    entity.institutionCode = account.institutionCode;
    entity.createdAt = account.createdAt;
    entity.updatedAt = account.updatedAt;
    return entity;
  }

  private _toModel(entity: AccountEntity): Account {
    const model = new Account();
    model.id = entity.id;
    model.userName = entity.userName;
    model.role = this._toRole(entity.role);
    model.password = entity.password;
    model.email = entity.email;
    model.institutionCode = entity.institutionCode;
    model.createdAt = entity.createdAt;
    model.updatedAt = entity.updatedAt;
    return model;
  }

  private _toRole(role: string): Role {
    if (role in Role) {
      return Role[role as keyof typeof Role];
    }
  }
}

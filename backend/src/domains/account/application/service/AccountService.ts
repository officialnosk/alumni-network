import { HttpException, Inject } from '@nestjs/common';
import {
  CreateAccountUseCase,
  FetchAccountUseCase,
  IncomingPortEnum,
} from '../../core/ports/IncomingPort';
import { Account } from '../../core/models/Account';
import { CreateAccountResponse, FetchAccountResponse } from '../dto/AccountDto';

export class AccountService {
  constructor(
    @Inject(IncomingPortEnum.CreateAccountUseCase)
    private readonly createAccountPort: CreateAccountUseCase,
    @Inject(IncomingPortEnum.FetchAccountUseCase)
    private readonly fetchAccountPort: FetchAccountUseCase,
  ) {}

  async createAccount(account: Account): Promise<CreateAccountResponse> {
    // todo: change from domain entities to dto
    const createdAccount = await this.createAccountPort.createAccount(account);
    return {
      id: createdAccount.id,
      userName: createdAccount.userName,
      email: createdAccount.email,
      createdAt: createdAccount.createdAt,
      role: createdAccount.role?.toString(),
      institutionCode: createdAccount.institutionCode,
    };
  }

  async fetchAccount(accountId: string): Promise<FetchAccountResponse> {
    try {
      const fetchedAccount =
        await this.fetchAccountPort.fetchAccount(accountId);
      return this.mapEntityToFetchAccountResponse(fetchedAccount);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async fetchAllAccounts(): Promise<FetchAccountResponse[]> {
    const fetchedAccounts = await this.fetchAccountPort.fetchAllAccounts();
    return fetchedAccounts.map((account) => {
      return this.mapEntityToFetchAccountResponse(account);
    });
  }

  private mapEntityToFetchAccountResponse(account: Account) {
    return {
      id: account.id,
      userName: account.userName,
      email: account.email,
      createdAt: account.createdAt,
      role: account.role?.toString(),
      institutionCode: account.institutionCode,
    };
  }
}

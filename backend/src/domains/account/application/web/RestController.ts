import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { Account } from '../../core/models/Account';
import { AccountService } from '../service/AccountService';
import { SuccessResponse, responses } from 'src/domains/shared/api.response';
import { CreateAccountResponse, FetchAccountResponse } from '../dto/AccountDto';

@Controller('accounts')
export class AccountRestController {
  constructor(
    @Inject(AccountService)
    private readonly service: AccountService,
  ) {}

  @Post()
  async createAccount(
    @Body() account: Account,
  ): Promise<SuccessResponse<CreateAccountResponse>> {
    return responses.toJSON(true, await this.service.createAccount(account));
  }

  @Get(':accountId')
  async fetchAccount(
    @Param('accountId') accountId: string,
  ): Promise<SuccessResponse<FetchAccountResponse>> {
    return responses.toJSON(true, await this.service.fetchAccount(accountId));
  }

  @Get()
  async fetchAllAccounts(): Promise<SuccessResponse<FetchAccountResponse[]>> {
    return responses.toJSON(true, await this.service.fetchAllAccounts());
  }

  @Delete(':accountId')
  async deleteAccount(
    @Param('accountId') accountId: string,
  ): Promise<SuccessResponse<void>> {
    return responses.toJSON(true, await this.service.deleteAccount(accountId));
  }
}

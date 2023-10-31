import { DeleteAccountUseCase } from '../ports/IncomingPort';
import { AccountRepository, OutgoingPortEnum } from '../ports/OutgoingPort';
import { Inject } from '@nestjs/common';

export class DeleteAccountAdapter implements DeleteAccountUseCase {
  constructor(
    @Inject(OutgoingPortEnum.AccountRepository)
    private readonly repository: AccountRepository,
  ) {}

  async deleteAccount(id: string): Promise<void> {
    try {
      await this.repository.deleteAccount(id);
    } catch (error) {
      throw error;
    }
  }
}

import { DisplayHelloUseCase } from './ports/IncomingPort';
import { HelloRepository } from './ports/OutgoingPort';

export class DisplayHelloAdapter implements DisplayHelloUseCase {
  constructor(private readonly helloRepo: HelloRepository) {}

  fetchHello(): string {
    return this.helloRepo.fetchHello();
  }
}

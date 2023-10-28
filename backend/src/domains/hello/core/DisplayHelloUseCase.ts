import { DisplayHelloPort } from './ports/IncomingPort';
import { HelloRepositoryPort } from '../core/ports/OutgoingPort';

export class DisplayHelloUseCase implements DisplayHelloPort {
  constructor(private readonly helloRepo: HelloRepositoryPort) {}

  fetchHello(): string {
    return this.helloRepo.fetchHello();
  }
}

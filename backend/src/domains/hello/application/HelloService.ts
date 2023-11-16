import { Inject, Injectable } from '@nestjs/common';
import { IncomingPortEnum } from '../core/ports/IncomingPort';
import { HelloRepositoryPort } from '../core/ports/OutgoingPort';

@Injectable()
export class HelloService {
  constructor(
    @Inject(IncomingPortEnum.DisplayHelloPort)
    private readonly displayHelloUseCase: HelloRepositoryPort,
  ) {}

  fetchHello(): string {
    return this.displayHelloUseCase.fetchHello();
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { IncomingPortEnum } from '../core/ports/IncomingPort';
import { HelloRepository } from '../core/ports/OutgoingPort';

@Injectable()
export class HelloService {
  constructor(
    @Inject(IncomingPortEnum.DisplayHelloUseCase)
    private readonly displayHelloUseCase: HelloRepository,
  ) {}

  fetchHello(): string {
    return this.displayHelloUseCase.fetchHello();
  }
}

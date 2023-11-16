import { Injectable } from '@nestjs/common';
import { Hello } from '../core/Hello';
import { HelloRepositoryPort } from '../core/ports/OutgoingPort';

@Injectable()
export class MockFetchHelloAdapter implements HelloRepositoryPort {
  private readonly hello: Hello;
  constructor() {
    this.hello = new Hello('Hello World!!!');
  }
  fetchHello() {
    return this.hello.getHello();
  }
}

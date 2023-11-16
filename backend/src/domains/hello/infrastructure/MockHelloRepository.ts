import { Injectable } from '@nestjs/common';
import { Hello } from '../core/Hello';
import { HelloRepository } from '../core/ports/OutgoingPort';

@Injectable()
export class MockHelloRepository implements HelloRepository {
  private readonly hello: Hello;
  constructor() {
    this.hello = new Hello('Hello World!!!');
  }
  fetchHello() {
    return this.hello.getHello();
  }
}

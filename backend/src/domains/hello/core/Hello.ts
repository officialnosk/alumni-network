export class Hello {
  private readonly hello: string;

  public constructor(hello: string) {
    this.hello = hello;
  }
  public getHello(): string {
    return this.hello;
  }
}

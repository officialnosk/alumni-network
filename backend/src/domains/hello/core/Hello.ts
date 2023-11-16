export class Hello {
  private readonly message: string;

  public constructor(hello: string) {
    this.message = hello;
  }
  public getHello(): string {
    return this.message;
  }
}

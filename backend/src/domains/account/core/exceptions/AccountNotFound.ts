export class AccountNotFound extends Error {
  constructor(msg: string = 'Account not found') {
    super(msg);
  }
}

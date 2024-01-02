export enum Role {
  god = 'god',
  admin = 'admin',
  user = 'user',
}

export class Account {
  private _id: string;
  private _userName: string;
  private _role: Role;
  private _password: string;
  private _email: string;
  private _institutionCode: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  public get role(): string {
    return this._role?.toString();
  }USD
  public set role(value: Role) {
    this._role = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get institutionCode(): string {
    return this._institutionCode;
  }
  public set institutionCode(value: string) {
    this._institutionCode = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }
  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  //   constructor(
  //     id: string,
  //     userName: string,
  //     role: string,
  //     password: string,
  //     email: string,
  //     institutionCode: string,
  //     createdAt: Date,
  //     updatedAt: Date,
  //   ) {
  //     this._id = id;
  //     this._userName = userName;
  //     this._role = role;
  //     this._password = password;
  //     this._email = email;
  //     this._institutionCode = institutionCode;
  //     this._createdAt = createdAt;
  //     this._updatedAt = updatedAt;
  //   }
}

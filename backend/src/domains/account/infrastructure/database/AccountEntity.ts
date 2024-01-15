/**
 * @author - Sushant Babu Luitel
 * @date - 12/19/23
 */

import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('account')
export class AccountEntity {

    @PrimaryColumn({name: 'id'})
    private _accountId: String;

    @Column({name: 'app_id'})
    private _appId: String;

    @Column({name: 'institution_id'})
    private _institutionId: String;

    @Column({name: 'user_name'})
    private _userName: String;

    @Column({name: 'role'})
    private _role: String;

    @Column({name: 'email'})
    private _email: String;

    @Column({name: 'password_salt'})
    private _passwordSalt: String;

    @Column({name: 'created_at'})
    private _createdAt: Date;

    @Column({name: 'updated_at'})
    private _updatedAt: Date;


    get getAccountId(): String {
        return this._accountId;
    }

    set setAccountId(value: String) {
        this._accountId = value;
    }

    get getAppId(): String {
        return this._appId;
    }

    set setAppId(value: String) {
        this._appId = value;
    }

    get getInstitutionId(): String {
        return this._institutionId;
    }

    set setInstitutionId(value: String) {
        this._institutionId = value;
    }

    get getUserName(): String {
        return this._userName;
    }

    set setUserName(value: String) {
        this._userName = value;
    }

    get getRole(): String {
        return this._role;
    }

    set setRole(value: String) {
        this._role = value;
    }

    get getEmail(): String {
        return this._email;
    }

    set setEmail(value: String) {
        this._email = value;
    }

    get getPasswordSalt(): String {
        return this._passwordSalt;
    }

    set setPasswordSalt(value: String) {
        this._passwordSalt = value;
    }

    get getCreatedAt(): Date {
        return this._createdAt;
    }

    set setCreatedAt(value: Date) {
        this._createdAt = value;
    }

    get getUpdatedAt(): Date {
        return this._updatedAt;
    }

    set setUpdatedAt(value: Date) {
        this._updatedAt = value;
    }
}
/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */

import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('institution')
export class InstitutionEntity {

    @PrimaryColumn({name: 'id'})
    private _institutionId: String;

    @Column({name: 'app_id'})
    private _appId: String;

    @Column({name: 'name'})
    private _institutionName: String;

    @Column({name: 'address_detail'})
    private _addressDetail: String;

    @Column({name: 'contact_info'})
    private _contactDetail: String;

    @Column({name: 'created_at'})
    private _createdAt: Date;

    @Column({name: 'updated_at'})
    private _updatedAt: Date;

    get getInstitutionId(): String {
        return this._institutionId;
    }

    set setInstitutionId(value: String) {
        this._institutionId = value;
    }

    get getInstitutionName(): String {
        return this._institutionName;
    }

    set setInstitutionName(value: String) {
        this._institutionName = value;
    }

    get getAddressDetail(): String {
        return this._addressDetail;
    }

    set setAddressDetail(value: String) {
        this._addressDetail = value;
    }

    get getContactDetail(): String {
        return this._contactDetail;
    }

    set setContactDetail(value: String) {
        this._contactDetail = value;
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


    get getAppId(): String {
        return this._appId;
    }

    set setAppId(value: String) {
        this._appId = value;
    }
}
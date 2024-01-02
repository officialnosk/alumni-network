/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */

export class Institution {
    private _institutionId: String;
    private _appId: String;
    private _institutionName: String;
    private _addressDetail: String;
    private _contactDetail: String;
    private _createdAt: Date;
    private _updatedAt: Date;


    get getInstitutionId(): String {
        return this._institutionId;
    }

    set setInstitutionId(value: String) {
        this._institutionId = value;
    }

    get getAppId(): String {
        return this._appId;
    }

    set setAppId(value: String) {
        this._appId = value;
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
}
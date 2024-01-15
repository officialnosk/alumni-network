/**
 * @author - Sushant Babu Luitel
 * @date - 1/3/24
 */

export class InstitutionDto {
    appId: String;
    name: String;
    addressDetail: String;
    contactInfo: String;
    institutionDetail: String;
    createdAt: bigint;
    updatedAt: bigint;
}

export class InstitutionResDto {
    id: String;
    name: String;
    addressDetail: String;
    contactInfo: String;
    institutionDetail: String;
    createdAt: bigint;
    updatedAt: bigint;
}
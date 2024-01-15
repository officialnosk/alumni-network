/**
 * @author - Sushant Babu Luitel
 * @date - 12/11/23
 */
import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('user')
export class UserEntity {

    @PrimaryColumn({name: 'id'})
    private id: String;

    @Column({name: 'app_id'})
    private appId: String;

    @Column({name: 'institution_id'})
    private institutionId: String;

    @Column({name: 'account_id'})
    private accountId: String;

    @Column({name: 'full_name'})
    private fullName: String;

    @Column({name: 'educational_detail'})
    private educationalDetail: String;

    @Column({name: 'contact_detail'})
    private contactDetail: String;

    @Column({name: 'career_detail'})
    private careerDetail: String;

    @Column({name: 'personal_detail'})
    private personalDetail: String;

    @Column({name: 'active_status'})
    private activeStatus: String;

    @Column({name: 'created_at'})
    private createdAt: Date;

    @Column({name: 'updated_at'})
    private updatedAt: Date;

    public set setId(value) {
        this.id = value;
    }

    public get getId(): String {
        return this.id;
    }



    public set setInstitutionId(value) {
        this.institutionId = value;
    }

    public get getInstitutionId(): String {
        return this.institutionId;
    }

    public set setAccountId(value: String) {
        this.accountId = value;
    }

    public get getAccountId() {
        return this.accountId;
    }

    public set setFullName(value: String) {
        this.fullName = value;
    }

    public get getFullName() {
        return this.fullName;
    }

    public set setEducationalDetail(value: String) {
        this.educationalDetail = value;
    }

    public get getEducationalDetail() {
        return this.educationalDetail;
    }

    public set setContactDetail(value: String) {
        this.contactDetail = value;
    }

    public get getContactDetail() {
        return this.contactDetail;
    }

    public set setCareerDetail(value: String) {
        this.careerDetail = value;
    }

    public get getCareerDetail() {
        return this.careerDetail;
    }

    public set setPersonalDetail(value: String) {
        this.personalDetail = value;
    }

    public get getPersonalDetail() {
        return this.personalDetail;
    }

    public set setCreatedAt(value: Date) {
        this.createdAt = value;
    }

    public get getCreatedAt() {
        return this.createdAt;
    }

    public set setUpdatedAt(value: Date) {
        this.createdAt = value;
    }

    public get getUpdatedAt() {
        return this.updatedAt;
    }

    public set setActiveStatus(value: String) {
        this.activeStatus = value;
    }

    public get getActiveStatus() {
        return this.activeStatus;
    }
}
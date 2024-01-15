/**
 * @author - Sushant Babu Luitel
 * @date - 12/12/23
 */
import {Injectable} from "@nestjs/common";
import {FindOneOptions, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {InstitutionEntity} from "../entity/InstitutionEntity";
import {Institution} from "../../../domains/institution/core/model/Institution";
import {InstitutionNotFoundException} from "../../../domains/institution/core/exception/InstitutionNotFoundException";

@Injectable()
export class InstitutionRepository {

    constructor(
        @InjectRepository(InstitutionEntity)
        private readonly institutionRepository: Repository<InstitutionEntity>
    ) {
    }

    async findAll(): Promise<Institution[]> {
        return (await this.institutionRepository.find())
            .map((entity) => this.toModel(entity)
            );
    }

    async findByInstitutionId(institutionId: String): Promise<Institution> {
        const institutionEntity = await this.institutionRepository.findOne({where: {_institutionId: institutionId}} as FindOneOptions<InstitutionEntity>);
        if (institutionEntity == null) {
            console.error("NotFoundError: Institution for the provided institutionId not found.");
            throw new InstitutionNotFoundException("NotFoundError: Institution for the provided institutionId not found.")
        }
        return this.toModel(institutionEntity);
    }

    private toEntity(institution: Institution): InstitutionEntity {
        const entity = new InstitutionEntity();
        entity.setAppId = institution.getAppId;
        entity.setInstitutionId = institution.getInstitutionId;
        entity.setInstitutionName = institution.getInstitutionName;
        entity.setAddressDetail = institution.getAddressDetail;
        entity.setContactDetail = institution.getContactDetail;
        entity.setCreatedAt = institution.getCreatedAt;
        entity.setUpdatedAt = institution.getUpdatedAt;
        return entity
    }

    private toModel(entity: InstitutionEntity): Institution {
        const institution = new Institution();
        institution.setAppId = entity.getAppId;
        institution.setInstitutionId = entity.getInstitutionId;
        institution.setInstitutionName = entity.getInstitutionName;
        institution.setAddressDetail = entity.getAddressDetail;
        institution.setContactDetail = entity.getContactDetail;
        institution.setCreatedAt = entity.getCreatedAt;
        institution.setUpdatedAt = entity.getUpdatedAt;
        return institution;
    }
}
/**
 * @author - Sushant Babu Luitel
 * @date - 12/15/23
 */
import {Institution} from "../../model/Institution";

export enum IncomingPortEnum {
    InstitutionUseCase = 'InstitutionUseCase'
}
export interface InstitutionUseCase {
    createInstitution(institution: Institution): Promise<Institution>;
    getInstitutionByInstitutionId(institutionId: string): Promise<Institution>;
    getAllInstitutions(): Promise<Institution[]>;
}

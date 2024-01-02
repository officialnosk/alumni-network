/**
 * @author - Sushant Babu Luitel
 * @date - 1/1/24
 */

import { InstitutionUseCase } from './IncomingPort';
import {Institution} from "../../model/Institution";

export class InstitutionInteractor implements InstitutionUseCase {

    createInstitution(institution: Institution): Promise<Institution> {
        return Promise.resolve(undefined);
    }

    getAllInstitutions(): Promise<Institution[]> {
        return Promise.resolve([]);
    }

    getInstitutionByInstitutionId(institutionId: string): Promise<Institution> {
        return Promise.resolve(undefined);
    }

}
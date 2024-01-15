/**
 * @author - Sushant Babu Luitel
 * @date - 1/4/24
 */
import {Institution} from "../../domains/institution/core/model/Institution";

export class InstitutionService {
    async createInstitution(institution: Institution): Promise<Institution> {
        return new Institution();
    }

    async findAll(): Promise<Institution []> {
        return ;
    }

    async findById(institutionId: string): Promise<Institution> {
        return new Institution();
    }

    async deleteInstitution(institutionId: string): Promise<void> {
        try {
        } catch (error) {
            throw error;
        }
    }

    async updateInsitution(institution: Institution) : Promise<Institution> {
        return new Institution();
    }
}
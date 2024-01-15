/**
 * @author - Sushant Babu Luitel
 * @date - 1/3/24
 */

import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {responses, SuccessResponse} from "../../domains/shared/api.response";
import {InstitutionDto, InstitutionResDto} from "../dto/institution/InstitutionDto";
import {InstitutionService} from "../service/InstitutionService";
import {Institution} from "../../domains/institution/core/model/Institution";

@Controller('institution')
export class InstitutionController {

    constructor(
        @Inject(InstitutionService)
        private readonly institutionService: InstitutionService
    ) {
    }
    @Post()
    async createInstitution(
        @Body() institution: InstitutionDto,
    ): Promise<SuccessResponse<InstitutionResDto>> {
        var createdInstitution = await this.institutionService.createInstitution(new Institution());
        return responses.toJSON(true, new InstitutionResDto);
    }

    @Get()
    async getAllInstitutions() : Promise<SuccessResponse<InstitutionResDto>> {
        var institutionList = await this.institutionService.findAll();
        return responses.toJSON(true, new InstitutionResDto);
    }

    @Get('/:institutionId')
    async getByInstitutionId(
        @Param('institutionId') institutionId: string
    ) : Promise<SuccessResponse<InstitutionResDto>> {
        var institution = await this.institutionService.findById(institutionId);
        return responses.toJSON(true, new InstitutionResDto);
    }

    @Put()
    async updateInstitution(
        @Body() institution: InstitutionDto
    ) : Promise<SuccessResponse<InstitutionResDto>> {
        var updatedInstitution = await this.institutionService.updateInsitution(new Institution());
        return responses.toJSON(true, new InstitutionResDto());
    }

    @Delete('/:institutionId')
    async deleteInstitution(
        @Param('institutionId') institutionId
    ): Promise<SuccessResponse<String>> {
        await this.institutionService.deleteInstitution(institutionId);
        const success = false;
        return responses.toJSON(success, success ? "Successfully Deleted" : "Could not delete")
    }

}
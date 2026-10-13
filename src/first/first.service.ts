import { Repository } from "typeorm";
import { Section } from "./section.model";
import { InjectRepository } from "@nestjs/typeorm";
import { AddSectionDto } from "./dto/add-section.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateSectionDto } from "./dto/update-section.dto";
import { response } from "express";
import { UpdateResult } from "typeorm/browser";

@Injectable()
/* eslint-disable prettier/prettier */
export class LoggerDevService {
    findAll() {
      return this.sectionRepository.find({
        withDeleted: true
      });
    }

    constructor(
        @InjectRepository(Section)
        private sectionRepository: Repository<Section>
    ) {
        console.log("Creation de LoggerService");
    }
    addSection(addSectionDto: AddSectionDto): Promise<Section> {
        return this.sectionRepository.save(addSectionDto);
    }    
    async updateSection(id:number, updateSectionDto: UpdateSectionDto): Promise<Section> {
        const newSection = await this.sectionRepository.preload({id, ...updateSectionDto});
        if(!newSection) throw new NotFoundException("La section n'existe pas");
        return this.sectionRepository.save(newSection);
    }    
    async softDeleteSection(id:number): Promise<UpdateResult> {
        const response = await this.sectionRepository.softDelete(id);
        if (!response.affected) throw new NotFoundException("La section n'existe pas");
        return response;
    }
    log(message: unknown): void {
        console.log('From Dev Logger');
        console.log({message});
    }
}
import { PartialType } from "@nestjs/mapped-types";
import { AddSectionDto } from "./add-section.dto";

export class UpdateSectionDto extends PartialType(AddSectionDto){
    // ajoute les autres elements eli 7achti Bihom
}
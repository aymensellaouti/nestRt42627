import { IsNumber, IsOptional, MinLength } from "class-validator";

export class UpdateSectionDto{
    @MinLength(5, {
        message: `Le nombre de caractère $value est plus petit que le nombre attendu`
    })
    @IsOptional()
    section: string;
    @IsNumber()
    @IsOptional()
    level: number;
}
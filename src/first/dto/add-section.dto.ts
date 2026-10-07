import { Type } from "class-transformer";
import { IsNumber, MinLength } from "class-validator";

export class AddSectionDto{
    @MinLength(5, {
        message: `Le nombre de caractère $value est plus petit que le nombre attendu`
    })
    section: string;
    @IsNumber()
    @Type(() => Number)
    level: number;
}
import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class ProcessFileDto {
  @IsOptional()
  @IsBoolean()
  readonly removeDuplicates?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly validateFormat?: boolean;

  @IsOptional()
  @IsString()
  readonly sortBy?: string;

  @IsOptional()
  @IsString()
  readonly sortOrder?: 'asc' | 'desc';
}

import { IsNotEmpty, IsString } from 'class-validator';

export class UploadFileDto {
  @IsNotEmpty()
  @IsString()
  readonly filename: string;

  @IsNotEmpty()
  @IsString()
  readonly format: string;
}

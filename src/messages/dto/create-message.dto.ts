/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateMessagesDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}

export class UpdateMessagesDto extends PartialType(CreateMessagesDto) {
  @IsNotEmpty()
  @IsMongoId()
  commentId: string;
}

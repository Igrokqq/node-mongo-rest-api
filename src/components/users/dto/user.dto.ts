import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(24)
  readonly fullname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

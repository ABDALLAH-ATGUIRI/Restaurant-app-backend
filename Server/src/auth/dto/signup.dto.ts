import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../schema/user.schema';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsEnum(Role, { message: 'Please enter correct Specialty.' })
  readonly role: Role;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}

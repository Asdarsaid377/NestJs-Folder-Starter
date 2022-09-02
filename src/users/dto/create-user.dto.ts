import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsNumber,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id?: number;
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email is not valid' })
  @IsString({ message: 'Email must be a string' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Length(8, 30)
  @IsNotEmpty()
  password: string;
}

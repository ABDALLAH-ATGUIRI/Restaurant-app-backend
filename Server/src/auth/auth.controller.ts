import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }>{
    return this.authService.signUp(signUpDto)
  }


  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }>{
    return this.authService.login(loginDto)
  }
}

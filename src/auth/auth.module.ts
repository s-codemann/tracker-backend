import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService /*{
    provide:'AUTH_SERVICE',
    useClass:AuthService
  }*/,
  ],
})
export class AuthModule {}

import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticateController } from '../../controllers/auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory() {
        return {
          privateKey: Buffer.from(process.env.JWT_PRIVATE_KEY, 'base64'),
          publicKey: Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64'),
          signOptions: {
            algorithm: 'RS256',
          },
        };
      },
    }),
  ],
  exports: [JwtModule],
  providers: [JwtStrategy],
  controllers: [AuthenticateController],
})
export class AuthModule {}

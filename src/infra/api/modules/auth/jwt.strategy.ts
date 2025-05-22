import { IUserRepository } from '@entities/user/repository/user.repository.interface';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import UserRepository from 'src/infra/db/sequelize/repository/user/user.repository';
import { z } from 'zod';

const tokenSchema = z.object({
  internal_id: z.string().uuid(),
});
export type TokenSchema = z.infer<typeof tokenSchema>;
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private repository: IUserRepository) {
    const publicKey = process.env.JWT_PUBLIC_KEY;
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: Buffer.from(publicKey, 'base64'),

      algorithms: ['RS256'],
    });
  }

  async validate(payload: TokenSchema) {
    const { internal_id } = tokenSchema.parse(payload);
    return this.repository.getById(internal_id);
  }
}

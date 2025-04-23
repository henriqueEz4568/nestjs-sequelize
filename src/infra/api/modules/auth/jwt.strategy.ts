import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { z } from 'zod';

const tokenSchema = z.object({
  internal_id: z.string().uuid(),
});
export type TokenSchema = z.infer<typeof tokenSchema>;
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const publicKey = process.env.JWT_PUBLIC_KEY;
    console.log(publicKey)
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: Buffer.from(publicKey, 'base64'),

      algorithms: ['RS256'],
    });
  }

  async validate(payload: TokenSchema) {
    return tokenSchema.parse(payload);
  }
}

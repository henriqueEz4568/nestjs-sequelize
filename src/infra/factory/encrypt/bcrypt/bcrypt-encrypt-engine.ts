import bcrypt from 'bcrypt';

export class BcryptHasher {
  constructor(private saltRounds = 10) {}

  async hash(text: string): Promise<string> {
    return await bcrypt.hash(text, this.saltRounds);
  }

  async compare(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash);
  }
}

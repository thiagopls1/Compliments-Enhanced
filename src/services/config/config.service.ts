import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  public get(key: string): string {
    return process.env[key];
  }
}

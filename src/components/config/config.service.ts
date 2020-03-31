import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: {[key: string]: string};

  constructor(type) {
    this.envConfig = dotenv.parse(
      fs.readFileSync(
        `${process.cwd()}/src/config/env/.env.${type}`
      )
    );
  }

  get(param: string): string {
    return this.envConfig[param];
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      PORT: {
        validate: Joi.number(),
        default: 3000
      },
      MONGODB_URI: {
        validate: Joi.string(),
        default: 'mongodb://localhost/'
      },
      DB_NAME: {
        validate: Joi.string(),
        default: 'test'
      }
    };
  }
}

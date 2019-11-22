import { ConfigService } from './config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }
  getHello(): string {
    return 'Hello World!';
  }
}

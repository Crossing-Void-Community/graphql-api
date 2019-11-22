import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigManagerModule } from '@nestjsplus/config';

@Global()
@Module({
  imports: [
    ConfigManagerModule.registerAsync({
      useFactory: () => ({
        useEnv: true,
        allowExtras: false,
        allowMissingEnvFile: true
      })
    })
  ],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}

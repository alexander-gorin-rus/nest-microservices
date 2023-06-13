import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '../libs/shared/src/shared.module';
import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ProvidersModule, SharedModule, ApiModule],
})
export class AppModule {}

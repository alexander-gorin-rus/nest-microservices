import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '../libs/shared/src/shared.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProvidersModule, SharedModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SomeFeatureController } from './some-feature.controller';
import { SomeFeatureService } from './some-feature.service';

@Module({
  controllers: [SomeFeatureController],
  providers: [SomeFeatureService],
})
export class SomeFeatureModule {}

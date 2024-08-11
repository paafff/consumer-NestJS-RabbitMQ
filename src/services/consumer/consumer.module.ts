import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerController } from './consumer.controller';

@Module({
  exports: [ConsumerService],
  providers: [ConsumerService],
  imports: [],
  controllers: [ConsumerController],
})
export class ConsumerModule {}

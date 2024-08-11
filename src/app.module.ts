import { Module } from '@nestjs/common';
import { ConsumerModule } from './services/consumer/consumer.module';
import { ConsumerService } from './services/consumer/consumer.service';

@Module({
  imports: [ConsumerModule],
  controllers: [],
  providers: [ConsumerService],
})
export class AppModule {}

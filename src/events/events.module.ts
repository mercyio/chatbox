/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChatGateway } from './events.gateway';
// import { EventsGateway } from './events.gateway';
// import { ChatConfigService } from 'src/common/config.service';

@Module({
  exports: [ChatGateway],
  providers: [ChatGateway],
})
export class EventsModule {}
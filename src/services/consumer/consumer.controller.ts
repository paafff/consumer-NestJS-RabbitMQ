// import { Injectable } from '@nestjs/common';
// import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

// @Injectable()
// export class ConsumerService {
//   @EventPattern('user_created')
//   async handleUserCreated(@Payload() data: any, @Ctx() context: RmqContext) {
//     console.log('User created event received:', data);
//     const channel = context.getChannelRef();
//     const originalMsg = context.getMessage();
//     channel.ack(originalMsg);
//   }

//   @EventPattern('message_created')
//   async handleMessageCreated(@Payload() data: any, @Ctx() context: RmqContext) {
//     console.log('Message created event received:', data);
//     const channel = context.getChannelRef();
//     const originalMsg = context.getMessage();
//     channel.ack(originalMsg);
//   }
// }

import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  @EventPattern('user_created')
  async handleUserCreatedEvent(data: Record<string, unknown>) {
    console.log('User created event received:', data);
    // Lakukan sesuatu dengan data event
  }

  @EventPattern('message_created')
  async handleMessageCreatedEvent(data: Record<string, unknown>) {
    console.log('Message created event received:', data);
    // Lakukan sesuatu dengan data event
  }
}

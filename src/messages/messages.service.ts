/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '.prisma/client';
// import { EventsGateway } from 'src/events/events.gateway';
// import { CreateMessagesDto, UpdateMessagesDto } from './dto/create-message.dto';
// const prisma = new PrismaClient();

// @Injectable()
// export class MessagesService {
//   constructor(private eventsGateway: EventsGateway) {}

//   async create(createMessageDto: CreateMessagesDto) {
//     const result = await prisma.message.create({
//       data: {
//         message: createMessageDto.message,
//         // Author: { connect: { id: createMessageDto.authorId } },
//         // Conversation: { connect: { id: createMessageDto.conversationId } },
//       },
//     });
//     this.eventsGateway.sendNewMessage(result);
//     return result;
//   }

//   findAll() {
//     return prisma.message.findMany();
//   }

//   findOne(id: string) {
//     return prisma.message.findUnique({ where: { id } });
//   }

//   update(id: string, updateMessageDto: UpdateMessagesDto) {
//     return prisma.message.update({
//       data: { ...updateMessageDto },
//       where: { id },
//     });
//   }

//   remove(id: string) {
//     return prisma.message.delete({ where: { id } });
//   }
// }

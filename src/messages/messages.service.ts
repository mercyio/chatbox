
import { Injectable } from '@nestjs/common';
import { CreateMessagesDto, UpdateMessagesDto } from './dto/create-message.dto';
import { MessagesGateway } from './messages.gateway';
import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()

export class MessagesService {
  constructor(private readonly messagesGateway: MessagesGateway) {}

  clientToUser = {}
  messages = []

  identify (name : string, clientId: string){
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }
    async create(payload: CreateMessagesDto) {
    const message = { ...payload};
    this.messages.push(message)

    return message
    }

    getClientName (clientId: string){
      return this.clientToUser[clientId]
    }

    async newMessage (payload: CreateMessagesDto ){
      const createdMessage =  await prisma.message.create({
        data: {
          message: payload.message,
          // authorId: { connect: { id: payload.authorId}},
          // conversationId: { connect: { id: payload.conversationId }},
          // isEdited: false,
          // isDeleted: false,
        },
      });
      this.messagesGateway.handleMessage(createdMessage)
      return createdMessage
    }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessagesDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }

   joinRoom(id: number) {
    return `This action removes a #${id} message`;
  }

   async typing(id: number) {
    return `This action removes a #${id} message`;
  }
}

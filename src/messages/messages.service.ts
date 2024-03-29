
import { Injectable } from '@nestjs/common';
import { CreateMessagesDto, UpdateMessagesDto } from './dto/create-message.dto';

@Injectable()

export class MessagesService {
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

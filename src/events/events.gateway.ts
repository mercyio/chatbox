/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from 'socket.io';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Message } from 'src/messages/schema/message.schema';
import { EVENT_NAME, EventType, NewMessageEvent } from './dto/events.dto';

@WebSocketGateway()
@Injectable()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: Message): string {
    Logger.log('request', message);
    this.server.emit('message', message)

    return `ack: ${'thank you for contacting '}`;
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('message')
  sendNewMessage(@MessageBody() message: Message) {
      const payload: NewMessageEvent = {
      eventType: EventType.NEW_MESSAGE,
      payload: message,
    };
    console.log(payload);
    this.server.emit(EVENT_NAME, {
      msg: 'new message',
      content: message,
    });
    return `ack: ${'thanks for contacting, how may we be of help to you'}`;
}
}




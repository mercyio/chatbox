// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable prettier/prettier */
// // chat.gateway.ts
// import {
//   WebSocketGateway,
//   WebSocketServer,
//   SubscribeMessage,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// import { Server } from 'socket.io';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Message } from './schema/message.schema';

// @WebSocketGateway()
// export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer() server: Server;

//   constructor(
//     @InjectModel(Message.name) private messageModel: Model<Message>,
//   ) {}

//   @SubscribeMessage('message')
//   async handleConnection(client: Server, ...args: any[]) {
//     console.log(`Client connected: ${client.connectTimeout}`);
//     const messages = await this.messageModel.find().exec();
//     client.emit('messages', messages);
//   }

//   @SubscribeMessage('message')
//   async handleDisconnect(client: Server) {
//     console.log(`Client disconnected: ${client.disconnectSockets}`);
//   }

//   @SubscribeMessage('message')
//   async handleMessage(
//     client: any,
//     payload: { sender: string; content: string },
//   ) {
//     console.log(`Message received from ${payload.sender}: ${payload.content}`);
//     const createdMessage = new this.messageModel(payload);
//     await createdMessage.save();
//     this.server.emit('EVENT_NAME', createdMessage);
//   }
// }

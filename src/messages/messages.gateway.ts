import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import {Server, Socket } from 'socket.io'
import { CreateMessagesDto, UpdateMessagesDto } from './dto/create-message.dto';
import { Message } from './schema/message.schema';
import { ServerToClientEvent } from 'src/common/interface/interface';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class MessagesGateway {
  @WebSocketServer()
  server: Server<any, ServerToClientEvent>

  onModuleInit() {
    this.server.on('connection', (socket) =>{
      console.log(socket.id);
      console.log('connected');
       
    })
  }
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  async handleMessage(@MessageBody() payload: CreateMessagesDto) {
    const createdMessage = await this.messagesService.create(payload);
    // this.server.emit('newMessage', payload)
    return 'Hello world'
    // console.log( payload);
    
  }

  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() body: any) {
    console.log( body);
    
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messagesService.findOne(id);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messagesService.remove(id);
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('name') name: string,
    @ConnectedSocket() client: Socket
    ) {
    return this.messagesService.identify(name, client.id);
  }

  @SubscribeMessage('typing')
  async typing(
    @MessageBody('isTyping') isTyping: boolean, 
    @ConnectedSocket() client: Socket
    ) {
    const name = await this.messagesService.getClientName(client.id);

    client.broadcast.emit('typing', { name, isTyping })
  }
}

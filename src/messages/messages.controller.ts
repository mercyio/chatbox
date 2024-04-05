/* eslint-disable prettier/prettier */
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { MessagesService } from './messages.service';
// import { Message } from './schema/message.schema';
// import { CreateMessagesDto, UpdateMessagesDto } from './dto/create-message.dto';

// @Controller('messages')
// export class MessagesController {
//   constructor(private readonly messagesService: MessagesService) {}

//   @Post()
//   async create(@Body() createMessageDto: CreateMessagesDto) {
//     return this.messagesService.create(createMessageDto);
//   }

//   @Get()
//   findAll(): Promise<Message[]> {
//     return this.messagesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.messagesService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessagesDto) {
//     return this.messagesService.update(id, updateMessageDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.messagesService.remove(id);
//   }
// }

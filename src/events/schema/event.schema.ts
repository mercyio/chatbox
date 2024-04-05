/* eslint-disable prettier/prettier */
// message.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop()
  sender: string;

  @Prop()
  content: string;

  // @Prop({ default: new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

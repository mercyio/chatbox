import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = Message & Document;

@Schema({ timestamps: true })
export class Message {

  @Prop({ required: true })
  message: string;
  
  @Prop({ required: true })
  authorId: string

  @Prop({ required: true })
  conversationId: string

  @Prop({ type: Boolean, default: false })
  isEdited: boolean;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date })
  deletedAt?: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

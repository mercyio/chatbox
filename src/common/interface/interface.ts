import { isValidObjectId } from "mongoose";
import { CreateMessagesDto } from "src/messages/dto/create-message.dto";
import { Message } from "src/messages/schema/message.schema";

export interface ServerToClientEvent {
    newMessage : {message: Message} ;
}
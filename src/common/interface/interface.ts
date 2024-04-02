import { Message } from "src/messages/schema/message.schema";

export interface ServerToClientEvent {
    newMessage : {message: Message} ;
}

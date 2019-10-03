import { Message } from './message';

export class Messages {
    messages: Message[];

    constructor() {
     }

     pushMessages(message: Message){
        this.messages.push(message);
     }

     getMessages() {
         return this.messages;
     }
}
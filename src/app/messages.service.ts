import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Message } from './models/Message';
import { Messages } from './models/Messages';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messagesArray = new Messages();

  newMessages() {
    var user1 = new User('Zach');
    var user2 = new User('Josh');

    var message1 = new Message(user2.name, 'Just saw the new picture', new Date());
    var message2 = new Message(user2.name, 'Think it is awesome!', new Date());
    var message3 = new Message(user1.name, 'Thanks! Really appreciate it', new Date());


    this.messagesArray.pushMessages(message1);
    this.messagesArray.pushMessages(message2);
    this.messagesArray.pushMessages(message3);

  }

  getMessages() {
    return this.messagesArray.getMessages();
  }
}

import { User } from './user';

export class Message {
    user: string;
    text: string;
    timestamp: Date = new Date();

    constructor(user: string, text: string, timestamp: Date) {
        this.user = user;
        this.text = text;
        this.timestamp = timestamp;
     }
}
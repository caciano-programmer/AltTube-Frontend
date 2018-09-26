import { Injectable } from '@angular/core';
import * as global from '../../../../globals';
import {Subject} from 'rxjs';

@Injectable()
export class LiveChatService {

  webSocket: WebSocket;
  messages: Subject<ChatModel> = new Subject();

  constructor() {
    this.webSocket = new WebSocket(global.liveChat);
    this.webSocket.onmessage = message => this.messages.next( JSON.parse(message['data']) );
  }

  sendMessage(message: ChatModel) {
    if (this.webSocket.readyState === 1)
      this.webSocket.send(JSON.stringify(message));
  }

  getMessages(): Subject<ChatModel> { return this.messages; }

  close(): void { this.webSocket.close(); }
}

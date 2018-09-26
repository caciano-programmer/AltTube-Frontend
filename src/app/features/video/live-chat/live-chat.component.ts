import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LiveChatService} from '../services/live-chat/live-chat.service';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit, OnDestroy {

  @Input('name') name: string;

  constructor(private chatService: LiveChatService, private accAuth: AccountAuthenticationService) {}

  ngOnInit() { this.chatService.getMessages().subscribe(); }

  ngOnDestroy() { this.chatService.close(); }

  sendMessage(msg: string) {
    this.accAuth.isLoggedIn().subscribe(
      value => value ? this.chatService.sendMessage({name: this.name, text: msg}) : this.accAuth.logout(true));
  }
}

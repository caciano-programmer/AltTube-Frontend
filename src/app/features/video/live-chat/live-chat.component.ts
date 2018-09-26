import {Component, OnDestroy, OnInit} from '@angular/core';
import {LiveChatService} from '../services/live-chat/live-chat.service';
import {AccountAuthenticationService} from '../../../authentication/account/account-authentication.service';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html'
})
export class LiveChatComponent implements OnInit, OnDestroy {

  comments: ChatModel[] = [];
  text: string;
  currentUser: string;

  constructor(private chatService: LiveChatService, private accAuth: AccountAuthenticationService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(data => this.comments.push(data));
    this.currentUser = this.accAuth.getName() || null;
  }

  ngOnDestroy() { this.chatService.close(); }

  loggedInValidity(input: HTMLInputElement) {
    this.accAuth.isLoggedIn().subscribe(data => data ? input.setCustomValidity('') : input.setCustomValidity('Please Login.'));
  }

  sendMessage(form: HTMLFormElement) {
    this.accAuth.isLoggedIn().subscribe(
      value => value ? ( this.chatService.sendMessage({name: this.currentUser, text: this.text}), form.reset() ) : this.accAuth.logout(true)
    );
  }

  scrollTo(div: HTMLDivElement) { div.scrollIntoView(); }
}

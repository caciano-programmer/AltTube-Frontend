import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  @Input('name') name: string;

  constructor() { }

  ngOnInit() {

  }

}

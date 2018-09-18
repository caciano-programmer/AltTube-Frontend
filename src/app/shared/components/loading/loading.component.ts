import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<div class="wrapper"><div class="spin-clockwise"></div><div class="spin-counterclockwise"></div></div>',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {}

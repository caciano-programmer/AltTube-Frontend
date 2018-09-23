import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video/video.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { CommentsComponent } from './comments/comments.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    FormsModule
  ],
  declarations: [VideoComponent, LiveChatComponent, CommentsComponent]
})
export class VideoModule { }

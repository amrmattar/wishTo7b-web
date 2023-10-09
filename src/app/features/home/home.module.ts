import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { DownloadAppOneComponent } from './components/download-app-one/download-app-one.component';
import { DownloadAppTwoComponent } from './components/download-app-two/download-app-two.component';
import { SharedModule } from "../../shared/shared.module";
import { InviteFriendsComponent } from './components/invite-friends/invite-friends.component';
import { ShareStoriesComponent } from './components/share-stories/share-stories.component';
import { ShareAudioComponent } from './components/share-audio/share-audio.component';
import { ChatNowComponent } from './components/chat-now/chat-now.component';
import { DownloadAppThreeComponent } from './components/download-app-three/download-app-three.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    DownloadAppOneComponent,
    DownloadAppTwoComponent,
    InviteFriendsComponent,
    ShareStoriesComponent,
    ShareAudioComponent,
    ChatNowComponent,
    DownloadAppThreeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScrollToModule,
    SharedModule,
    TranslateModule
  ]
})
export class HomeModule { }

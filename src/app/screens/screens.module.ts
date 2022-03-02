import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ScreensRoutingModule } from './screens-routing.module';
import { LoginComponent } from './login/login.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { BoxModelModule } from '../box-model/box-model.module';
import { ScreensComponent } from './screens.component';

import { AngMusicPlayerModule } from './../../../projects/ang-music-player/src/public-api';

@NgModule({
  declarations: [
    ScreensComponent,
    LoginComponent,
    MediaPlayerComponent
  ],
  imports: [
    BoxModelModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ScreensRoutingModule,
    AngMusicPlayerModule,
  ],
  bootstrap: [ScreensComponent]
})
export class ScreensModule { }

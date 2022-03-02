import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { AuthGuard } from '../_services/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  },{
  path: 'media',
  canActivate: [AuthGuard],
  component: MediaPlayerComponent,  
},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }

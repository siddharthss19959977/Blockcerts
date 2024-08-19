import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel/channel.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    ChannelComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChannelModule { }

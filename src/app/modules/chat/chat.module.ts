import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ViewComponent } from './view/view.component';
import { chatrouter } from './chat.router';
import { ChartsComponent } from './charts/charts.component';
import { LinksComponent } from './links/links.component';


@NgModule({
  declarations: [
    ChatComponent,
    ViewComponent,
    ChartsComponent,
    LinksComponent
  ],
  imports: [
    CommonModule,
    chatrouter
  ]
})


export class ChatModule { }

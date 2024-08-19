import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { ViewComponent } from './view/view.component';
import { ChartsComponent } from './charts/charts.component';
import { LinksComponent } from './links/links.component';
import { teamrouter } from './team.router';


@NgModule({
  declarations: [
    TeamComponent,
    ViewComponent,
    ChartsComponent,
    LinksComponent
  ],
  imports: [
    CommonModule,
    teamrouter
  ]
})


export class TeamModule { }

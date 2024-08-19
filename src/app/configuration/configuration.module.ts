import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ViewComponent } from './view/view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { configurationrouter } from './configuration.router';


@NgModule({
  declarations: [
    ConfigurationComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    configurationrouter
  ]
})


export class ConfigurationModule {}
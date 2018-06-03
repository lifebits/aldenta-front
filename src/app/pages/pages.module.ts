import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { IndexPageModule } from './index-page/index-page.module';
import { ServicesPageModule } from './services-page/services-page.module';

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';

@NgModule({
  imports: [
    CommonModule,
    UiElementsModule,
    IndexPageModule,
    ServicesPageModule
  ],
  declarations: [
    HeaderNavigationComponent,
    HeaderLogoComponent
  ],
  exports: [
    HeaderNavigationComponent,
    HeaderLogoComponent
  ]
})
export class PagesModule { }

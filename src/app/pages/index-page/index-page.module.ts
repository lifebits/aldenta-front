import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiElementsModule } from '../../ui-elements/ui-elements.module';
import { PipesModule } from '../../pipes/pipes.module';

import { IndexPageComponent } from './index-page.component';
import { SingleBannerComponent } from './components/single-banner/single-banner.component';
import { MainDirectionsComponent } from './components/main-directions/main-directions.component';
import { DiscountsSliderComponent } from './components/discounts-slider/discounts-slider.component';
import { OurTechnologiesComponent } from './components/our-technologies/our-technologies.component';
import { SpeakingOfClientsComponent } from './components/speaking-of-clients/speaking-of-clients.component';
import { RecentReviewsSliderComponent } from './components/recent-reviews-slider/recent-reviews-slider.component';

import { IndexPageService } from './index-page.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiElementsModule,
    PipesModule
  ],
  declarations: [
    IndexPageComponent,
    SingleBannerComponent,
    MainDirectionsComponent,
    DiscountsSliderComponent,
    OurTechnologiesComponent,
    SpeakingOfClientsComponent,
    RecentReviewsSliderComponent,
  ],
  providers: [
    IndexPageService
  ]
})
export class IndexPageModule { }

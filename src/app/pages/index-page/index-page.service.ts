import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { IndexPageResponse, MainDirectionResponse, SingleBannerResponse, OurTechnologiesResponse } from 'models/pages.interface';
import { Discount } from 'models/discounts.interface';
import { ReviewsResponse } from 'models/social.interface';

@Injectable()
export class IndexPageService {

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient) {
  }

  getIndexPage(): Observable<IndexPageResponse> {
    return forkJoin(
      this.getSingleBannerData(),
      this.getMainDirections(),
      this.getActiveDiscounts(),
      this.getOurTechnologies()
    ).pipe(
      map(response => {
        const [ mainBanner, mainDirections, discounts, ourTech ] = response;
        return {
          mainBanner: mainBanner,
          mainDirection: mainDirections,
          discounts: discounts,
          ourTechnologies: ourTech
        };
      })
    );
  }

  getSingleBannerData(): Observable<SingleBannerResponse> {
    // const url = environment.baseApi + `/mocks/index-single-banner.json`;
    const url = environment.baseApi + `/banners/main`;
    return this.http.get<SingleBannerResponse>(url);
  }

  getMainDirections(): Observable<MainDirectionResponse> {
    // const url = environment.baseApi + '/mocks/index-directions.json';
    const url = environment.baseApi + `/directions`;
    return this.http.get<MainDirectionResponse>(url);
  }

  getActiveDiscounts(): Observable<Discount[]> {
    // const url = environment.baseApi + '/mocks/discounts.json';
    const url = environment.baseApi + `/discounts`;
    return this.http.get<Discount[]>(url);
  }

  getOurTechnologies(): Observable<OurTechnologiesResponse> {
    // const url = environment.baseApi + '/mocks/index-our-technologies.json';
    const url = environment.baseApi + `/our_technologies`;
    return this.http.get<OurTechnologiesResponse>(url);
  }

  getRecentReview(): Observable<ReviewsResponse> {
    const url = environment.baseApi + '/mocks/recent-reviews.json';
    return this.http.get<ReviewsResponse>(url);
  }

}
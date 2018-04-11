import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '../components/site-header/site-header.component';
import { SiteFooterComponent } from '../components/site-footer/site-footer.component';
import { SiderbarComponent } from '../components/siderbar/siderbar.component';


import { SummarizeLiteraturesComponent } from '../pages/summarize/summarize-literatures/summarize-literatures.component';
import { SummarizeTechnologyComponent } from '../pages/summarize/summarize-technology/summarize-technology.component';
import { SummarizeCultivateComponent } from '../pages/summarize/summarize-cultivate/summarize-cultivate.component';
import { SummarizeAboutmeComponent } from '../pages/summarize/summarize-aboutme/summarize-aboutme.component';

import { LiteraturesComponent } from '../pages/literatures/literatures.component';
import { TechnologyComponent } from '../pages/technology/technology.component';
import { CultivateComponent } from '../pages/cultivate/cultivate.component';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { HomeComponent } from '../pages/home/home.component';


export const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'summarize',
    children: [
      { path: 'literatures', component: SummarizeLiteraturesComponent },
      { path: 'technology', component: SummarizeTechnologyComponent },
      { path: 'cultivate', component: SummarizeCultivateComponent },
      { path: 'aboutme', component: SummarizeAboutmeComponent },

      { path: 'literatures/:id', component: LiteraturesComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'cultivate/:id', component: CultivateComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]  
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
]

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiderbarComponent,
    LiteraturesComponent,
    TechnologyComponent,
    CultivateComponent,
    AboutMeComponent,
    HomeComponent,
    SummarizeLiteraturesComponent,
    SummarizeTechnologyComponent,
    SummarizeCultivateComponent,
    SummarizeAboutmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

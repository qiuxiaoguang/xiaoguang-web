import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '../components/site-header/site-header.component';
import { SiteFooterComponent } from '../components/site-footer/site-footer.component';
import { SiderbarComponent } from '../components/siderbar/siderbar.component';
import { LiteraturesComponent } from '../pages/literatures/literatures.component';
import { TechnologyComponent } from '../pages/technology/technology.component';
import { CultivateComponent } from '../pages/cultivate/cultivate.component';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { HomeComponent } from '../pages/home/home.component';
import { SummarizeComponent } from '../pages/summarize/summarize.component';


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
    SummarizeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

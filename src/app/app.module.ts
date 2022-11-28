import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeadViewComponent } from './head-view/head-view.component';
import { SecBoxesComponent } from './sec-boxes/sec-boxes.component';
import { SecEventsComponent } from './sec-events/sec-events.component';
import { SecProjectsComponent } from './sec-projects/sec-projects.component';
import { SecStandardComponent } from './sec-standard/sec-standard.component';
import { SecPartnersComponent } from './sec-partners/sec-partners.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeadViewComponent,
    SecBoxesComponent,
    SecEventsComponent,
    SecProjectsComponent,
    SecStandardComponent,
    SecPartnersComponent,
    FooterComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

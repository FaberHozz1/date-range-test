import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomRangesComponent } from './components/custom-ranges/custom-ranges.component';

@NgModule({
  declarations: [AppComponent, CustomRangesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

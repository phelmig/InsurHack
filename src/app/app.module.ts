import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { Configuration } from './swagger';
import { PolicyApi } from './swagger/api/PolicyApi';
import { AccountApi } from './swagger/api/AccountApi';
import { AppComponent } from './components/app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { PersonalDetailsPageComponent } from './components/personal-details-page/personal-details-page.component';
import { IndividualizeCoveragePageComponent } from './components/individualize-coverage-page/individualize-coverage-page.component';
import { AdditionalInfoPageComponent } from './components/additional-info-page/additional-info-page.component';
import { CompleteCheckoutPageComponent } from './components/complete-checkout-page/complete-checkout-page.component';
import { Md2Module }  from 'md2';
import { LocalStorageService } from './services/local-storage-service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/personal-details', pathMatch: 'full' },
  { path: 'personal-details', component: PersonalDetailsPageComponent },
  { path: 'individualize-coverage', component: IndividualizeCoveragePageComponent },
  { path: 'additional-info', component: AdditionalInfoPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    PersonalDetailsPageComponent,
    IndividualizeCoveragePageComponent,
    AdditionalInfoPageComponent,
    CompleteCheckoutPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    Md2Module.forRoot()
  ],
  providers: [
    PolicyApi,
    LocalStorageService,
    AccountApi,
    {
      provide: Configuration, useValue: new Configuration("d06a9843-ce15-30a4-9af8-30b848015e5e")
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

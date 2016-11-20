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
import { MonsterBarComponent } from './components/monster-bar/monster-bar.component';
import { PersonalDetailsPageComponent } from './components/personal-details-page/personal-details-page.component';
import { IndividualizeCoveragePageComponent } from './components/individualize-coverage-page/individualize-coverage-page.component';
import { AdditionalInfoPageComponent } from './components/additional-info-page/additional-info-page.component';
import { CompleteCheckoutPageComponent } from './components/complete-checkout-page/complete-checkout-page.component';
import { Md2Module }  from 'md2';
import { LocalStorageService } from './services/local-storage-service';
import { IndividualizeCoverageBottomSheetComponent } from './components/individualize-coverage-bottom-sheet/individualize-coverage-bottom-sheet.component';
import { PolicyCardComponent } from './components/policy-card/policy-card.component';
import { KellyMonsterPageComponent } from './components/kelly-monster-page/kelly-monster-page.component';
import { KellyPageComponent } from './components/kelly-page/kelly-page.component';
import { KellyMonsterSharePageComponent } from './components/kelly-monster-share-page/kelly-monster-share-page.component';
import { InstasurePageComponent } from './components/instasure-page/instasure-page.component';
import { FinalizeContractPageComponent } from './components/finalize-contract-page/finalize-contract-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: InstasurePageComponent },
  { path: 'kelly', component: KellyPageComponent },
  { path: 'kelly-monster', component: KellyMonsterPageComponent },
  { path: 'kelly-monster-share', component: KellyMonsterSharePageComponent },
  { path: 'personal-details', component: PersonalDetailsPageComponent },
  { path: 'individualize-coverage', component: IndividualizeCoveragePageComponent },
  { path: 'additional-info', component: AdditionalInfoPageComponent },
  { path: 'complete-checkout', component: CompleteCheckoutPageComponent },
  { path: 'finalize-contract', component: FinalizeContractPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    MonsterBarComponent,
    PersonalDetailsPageComponent,
    IndividualizeCoveragePageComponent,
    AdditionalInfoPageComponent,
    CompleteCheckoutPageComponent,
    IndividualizeCoverageBottomSheetComponent,
    PolicyCardComponent,
    KellyMonsterPageComponent,
    KellyPageComponent,
    KellyMonsterSharePageComponent,
    InstasurePageComponent,
    FinalizeContractPageComponent,
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

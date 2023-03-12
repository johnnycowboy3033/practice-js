import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ConcatComponent } from './components/array/concat/concat.component';
import { CopywithinComponent } from './components/array/copywithin/copywithin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InitializeComponent } from './components/array-helper/initialize/initialize.component';


let appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'array/concat', component: ConcatComponent },
  { path: 'array/copywithin', component: CopywithinComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ConcatComponent,
    CopywithinComponent,
    NavbarComponent,
    InitializeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

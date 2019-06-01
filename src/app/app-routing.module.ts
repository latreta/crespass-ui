import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

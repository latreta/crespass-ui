import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [SignInComponent, SignUpComponent ],
    imports: [
        CommonModule
    ],
    exports: [SignInComponent, SignUpComponent ],
    providers: []
})
export class HomeModule {

}
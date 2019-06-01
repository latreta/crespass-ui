import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [WelcomeComponent, FooterComponent, HeaderComponent, NavbarComponent],
    imports: [
        CommonModule
    ],
    exports: [WelcomeComponent, FooterComponent, HeaderComponent, NavbarComponent],
    providers: []
})
export class SharedModule {}


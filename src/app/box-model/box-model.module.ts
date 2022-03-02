import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModelRoutingModule } from './box-model-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    BoxModelRoutingModule
  ],
  exports: [...COMPONENTS],
})
export class BoxModelModule { 
  static forRoot(): ModuleWithProviders<BoxModelModule> {
    return {
      ngModule: BoxModelModule,
      providers: [
      ],
    };
  }
}

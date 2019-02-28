import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';
import { ContactPopupComponent } from './contact-popup.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    ContactPopupComponent,
  ],
  exports: [
    ContactPopupComponent,
  ],
  providers: [],
})
export class ContactPopupModule {}

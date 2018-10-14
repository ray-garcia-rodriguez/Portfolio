import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
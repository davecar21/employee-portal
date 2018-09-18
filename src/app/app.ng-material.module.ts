import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NgMaterialModule { }

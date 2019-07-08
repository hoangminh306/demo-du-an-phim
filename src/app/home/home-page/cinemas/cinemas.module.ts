import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasComponent } from './cinemas.component';

@NgModule({
  declarations: [CinemasComponent],
  exports: [CinemasComponent],
  imports: [
    CommonModule
  ]
})
export class CinemasModule { }

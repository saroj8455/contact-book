import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, DividerModule, InputTextModule, CheckboxModule],
})
export class PrimeconfigModule {}

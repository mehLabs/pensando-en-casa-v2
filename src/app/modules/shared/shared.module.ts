import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Form Controls
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
// Material Navigation
// Material Layout
import { MatListModule } from '@angular/material/list';
// Material Buttons & Indicators
// Material Popups & Modals
// Material Data tables
import { SnackComponent } from './snack/snack.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

// Pipes

@NgModule({
  declarations: [SnackComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatChipsModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
  ],
})
export class SharedModule {}

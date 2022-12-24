import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Form Controls
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
// Material Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
// Material Buttons & Indicators
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// Material Popups & Modals
// Material Data tables
import { ArsCurrencyPipe } from 'src/app/pipes/ars-currency.pipe';
import { YesNoPipe } from 'src/app/pipes/yes-no.pipe';

// Pipes

@NgModule({
  declarations: [ArsCurrencyPipe, YesNoPipe],
  imports: [
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    YesNoPipe,
    ArsCurrencyPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}

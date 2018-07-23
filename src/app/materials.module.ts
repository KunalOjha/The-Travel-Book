import { NgModule } from "@angular/core";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialsModule {}

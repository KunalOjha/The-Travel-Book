import { NgModule } from "@angular/core";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatSnackBarModule, MatSlideToggleModule } from '@angular/material';

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
    MatSlideToggleModule
  ]
})
export class MaterialsModule{}

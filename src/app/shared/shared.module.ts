import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogCardComponent } from "./components/blog-card/blog-card.component";
import { MaterialsModule } from "../materials.module";
import { FormsModule } from "../../../node_modules/@angular/forms";

@NgModule({
  declarations: [BlogCardComponent],
  exports: [CommonModule, FormsModule, MaterialsModule, BlogCardComponent]
})
export class SharedModule {}

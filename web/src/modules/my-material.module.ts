import { NgModule } from "@angular/core";
import { TextInputComponent } from "../app/components/text-input/text-input.component";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const modules = [
  TextInputComponent,
  MatIconModule,
  FormsModule,
  CommonModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MyMaterialModule {}

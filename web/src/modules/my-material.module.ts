import { NgModule } from "@angular/core";
import { TextInputComponent } from "../app/components/text-input/text-input.component";
import { MatIconModule } from "@angular/material/icon";

const modules = [
  TextInputComponent,
  MatIconModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MyMaterialModule {}
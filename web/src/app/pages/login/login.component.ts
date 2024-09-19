import { Component } from '@angular/core';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { TextInputComponent } from "../../components/text-input/text-input.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MyMaterialModule, TextInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
}

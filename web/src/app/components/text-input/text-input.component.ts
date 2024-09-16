import { Component, input, Input, Type } from '@angular/core';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() required: boolean = false;
  @Input() icon: string = '';
}

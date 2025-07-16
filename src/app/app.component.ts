import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  title = 'Simple Calculator';

  currentInput = '';
  result = '';

  append(value: string) {
    this.currentInput += value;
  }

  clear() {
    this.currentInput = '';
    this.result = '';
  }

  calculate() {
    try {
      this.result = eval(this.currentInput);
    } catch (e) {
      this.result = String(e);
    }
  }
}

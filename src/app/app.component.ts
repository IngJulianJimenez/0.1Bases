import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /**
   * variables
   */
  public title: string = 'Componente en la Raiz proyecto';
  public counter: number = 0;

  /**
   * metodos
   */
  increaseBy(value: number): void {
    if (value != 10) {
      this.counter += value;
    } else {
      this.counter = value
    }
  }
}

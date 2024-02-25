import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './app.counter.html',
})
export class CounterComponent{
    /**
   * variables
   */
    public title: string = 'Componente agregado';
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

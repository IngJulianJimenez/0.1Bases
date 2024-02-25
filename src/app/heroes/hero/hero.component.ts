import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  /**
   * varaibles
   */
  public name: string = 'iroman';
  public age: number = 45;

  /**
   * get - set propiedades
   */
  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  /**
   * metodos
   */
  getHerodescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): string {
    return this.name='Spiderman';
  }

  changeAge(): number{
    return this.age =25;
  }

  resetForm(): string{
    return `${this.name = 'iroman'} - ${this.age = 45}`;
  }


}

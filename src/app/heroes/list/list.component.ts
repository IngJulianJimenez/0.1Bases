import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

/**
 * varaibles
 */
public herosNames: string [] = ['Spiderman','Iroman','Hulk','Thanos']
public deleteHero?: string;

/**
 * metodos
 */
removeLastHero():void{
this.deleteHero = this.herosNames.pop();
}

}

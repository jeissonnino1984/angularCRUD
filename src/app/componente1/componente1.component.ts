import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

titulo:String="";
numero1:number=0;
numero2:number=0;
result:number=0;
rendered:boolean = true;
animales: Array<string> = ['perro', 'gato', 'pollo'];

  public sum(){
this.result = this.numero1 + this.numero2;
if (this.result > 10) {
  this.rendered = false
}
  }

  public res(){
    this.result = this.numero1 - this.numero2;
    if (this.result < 0) {
      this.rendered = false
    }
      }

      public reset(){
        this.numero1=0;
        this.numero2=0;
        this.result=0;
        this.rendered= true;
      }


      mostrarValor(valor:String){
      }



}

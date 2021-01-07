import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
busqueda: string;
     
  constructor(private _imagenesServices: ImagenesService) { 
    this.busqueda = '';
  }

  ngOnInit(): void {
  }
buscar(){
  if (this.busqueda === '') {
    this._imagenesServices.setError('Ooops! Ocurrio un error. Agrega un palabra de busqueda');
    document.body.scrollTop = 150;
    document.documentElement.scrollTop = 150;
    return ;
  }
  this._imagenesServices.enviarTerminoBusqueda(this.busqueda);
  document.body.scrollTop = 370;
 document.documentElement.scrollTop = 370;
}

prueba(){
  console.log("DD");
}
}

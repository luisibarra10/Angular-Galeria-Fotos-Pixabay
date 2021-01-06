import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.css']
})
export class ListadoImagenesComponent implements OnInit {
  termino = '';
  popular = "popular";
  suscription: Subscription
  listadoImagenes: any[] = [];

  constructor(private _imagenesService: ImagenesService) { 
    this.suscription = this._imagenesService.getTermino().subscribe(data =>{
      this.termino = data;
      this.getImagenes();
    })
  }

  ngOnInit(): void {
    this.getImagenesMain();
  }

  getImagenes(){
    this._imagenesService.getImagenes(this.termino).subscribe(data => {

      if (data.hits.length < 1) {
        this._imagenesService.setError('¡Vaya!, No se encontro ningun resultado. Intenta con otra busqueda');
        return;
      }
      this.listadoImagenes = data.hits;
    },error =>{
      this._imagenesService.setError('¡Oops! Ocurrio un error desde el Servidor ')
    })
  }

  getImagenesMain(){
    this._imagenesService.getImagenes(this.popular).subscribe(data => {
      console.log(this.popular);
      this.listadoImagenes = data.hits;
      return;
    })
  }

}

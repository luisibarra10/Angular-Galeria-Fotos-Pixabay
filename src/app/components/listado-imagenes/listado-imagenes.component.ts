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
  popular = "naturaleza";
  spinner = false;
  imagenesPorPagina = 30;
  paginaActual = 1;
  totalPaginas  = 0;
  suscription: Subscription
  listadoImagenes: any[] = [];

  constructor(private _imagenesService: ImagenesService) { 
    this.suscription = this._imagenesService.getTermino().subscribe(data =>{
      this.mostrarSpinnerVacio();
      this.termino = data;
      this.getImagenes();
      this.paginaActual = 1;
    })
  }

  ngOnInit(): void {
    this.getImagenesMain();
  }

  getImagenes(){
    this._imagenesService.getImagenes(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe(data => {
      this.mostrarSpinnerVacio();
      if (data.hits.length < 1) {
        this._imagenesService.setError('¡Vaya!, No se encontro ningun resultado. Intenta con otra busqueda');
        document.body.scrollTop = 150;
        document.documentElement.scrollTop = 150;
        return this.listadoImagenes = <any>[];
      }
      this.totalPaginas = Math.ceil(data.totalHits / this.imagenesPorPagina);
      

      this.listadoImagenes = data.hits;
    },error =>{
      this._imagenesService.setError('¡Oops! Ocurrio un error desde el Servidor ')
      this.mostrarSpinnerVacio();
    })
  }

  getImagenesMain(){
    this._imagenesService.getImagenes(this.popular, this.imagenesPorPagina, this.paginaActual).subscribe(data => {
      this.totalPaginas = Math.ceil(data.totalHits / this.imagenesPorPagina);
      this.listadoImagenes = data.hits;
      return;
    })
  }

  mostrarSpinnerVacio(){
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 500);
  }

  paginaAnterior(){
    
    this.paginaActual --;
    this.spinner = true;
    this.listadoImagenes = [];
    this.getImagenes();
    document.body.scrollTop = 370;
 document.documentElement.scrollTop = 370;
  }

  paginaSiguiente(){
    this.paginaActual ++;
    this.spinner = true;
    this.listadoImagenes = [];
    this.getImagenes();
    document.body.scrollTop = 370;
 document.documentElement.scrollTop = 370;
  }


}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  texto: string;
  mostrar: boolean;
  suscripcion: Subscription;

  constructor(private _imagenesServices: ImagenesService) { 
    this.texto = '';
    this.mostrar = false;
    this.suscripcion = this._imagenesServices.getError().subscribe(data => {
      this.mostrarMensajeVacio();
      this.texto = data;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
    
  }


  mostrarMensajeVacio(){
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    }, 3000);
  }
}

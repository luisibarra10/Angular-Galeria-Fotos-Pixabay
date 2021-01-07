
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  setError(mensaje:string){
    this.error$.next(mensaje);
  }

  getError(): Observable<string>{
    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino);
  }

  getTermino(): Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino: string, imagenesPorPagina: number, paginaActual:number): Observable<any>{
    const key = '15067254-d2178f67b423fcb3276a48b6e';
    const url = 'https://pixabay.com/api/?key=' + key +'&q=' + termino + '&per_page=' + imagenesPorPagina + '&page=' + paginaActual;
    return this.http.get(url);
  }

}

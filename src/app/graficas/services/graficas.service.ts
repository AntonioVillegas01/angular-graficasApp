import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) {
  }

  getUsuariosRedesSociales(): Observable<any> {
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosRedesSocialesDonaData(): Observable<any>{
    return this.getUsuariosRedesSociales()
      .pipe(
       map( data => {
            const labels = Object.keys(data);
            const values: number[] = Object.values(data);
         return {labels, values}
       })
      )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../Models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url:string="http://localhost:5093/HotelComponent"
  constructor(private http: HttpClient) { }

  public Getitems(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.url)
  }
  
  public GetItem(Id:number): Observable<Hotel>{
    let tempUrl = this.url + "/" + Id;
    return this.http.get<Hotel>(tempUrl);
  }

  public Additem(ht:Hotel): Observable<Hotel>{
    return this.http.post<Hotel>(this.url,ht)
  }

  public RemoveItem(id:number): Observable<void>{
    let tempUrl = this.url + "/" + id;
    return this.http.delete<void>(tempUrl);
  }

  public Updateitem(ht:Hotel):Observable<Hotel>{
    const tempUrl = this.url + "/" + ht.Id;
    return this.http.put<Hotel>(tempUrl, ht);
  }
}

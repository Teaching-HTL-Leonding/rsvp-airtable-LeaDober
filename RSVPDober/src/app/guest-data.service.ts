import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './app.module';
import { Fields, Root } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class GuestDataService {

  constructor(private http:HttpClient, @Inject (BASE_URL)private baseUrl:string) { }

  public loadGuests():Observable<Root>{
    return this.http.get<Root>(`${this.baseUrl}/Guests`);
  }
  public createGuest(guest:Fields):Observable<unknown>{
    const body: Root = {
      records:[
        {fields:guest}
      ]
    }
    return  this.http.post(`${this.baseUrl}/Guests`,body);
  }

}

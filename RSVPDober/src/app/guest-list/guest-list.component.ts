import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { GuestDataService } from '../guest-data.service';
import { Root } from '../register/register.component';


@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  dataFromServer!:Root;
  countGuests:number=0;
  countAdditionalGuests:number=0;
  allGuests: number=0;

  constructor(private guestDate:GuestDataService){


  }
  ngOnInit(): void {

    this.guestDate.loadGuests().subscribe(data => this.dataFromServer=data  );

  }



  public totalAmountOfGuests():number {

    let value=0;

    for (let entry of this.dataFromServer?.records) {
      if (entry.fields.AttentToParty) {
        this.countGuests++;
        value++;
        if (entry.fields.AdditionalGuest) {
          this.countAdditionalGuests++;
          value++;
        }
      }
    }
    this.allGuests=this.countAdditionalGuests+this.countGuests;
    return value;


  }


}

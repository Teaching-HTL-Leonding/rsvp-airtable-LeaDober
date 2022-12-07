import { Component, OnInit } from '@angular/core';
import { GuestDataService } from '../guest-data.service';

export interface Root {
  records: Record[]
}

export interface Record {
  id?: string
  fields: Fields
}

export interface Fields {
  Name: string
  AttentToParty?:boolean
  Comment: string
  AdditionalGuest?:boolean
  AdditionalGuestName: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public currentItem!: Fields;

  sucessfullGuestEnter?:boolean;



  constructor(private guestDate:GuestDataService){
    this.resetForm();

  }
  ngOnInit(): void {


  }
  save():void{
    this.guestDate.createGuest(this.currentItem).subscribe();
    this.resetForm();

  }
  resetForm():void{
    this.currentItem={
      Name: '',
      AttentToParty:false,
      Comment: '',
      AdditionalGuest: false,
      AdditionalGuestName: ''

    }
  }

}

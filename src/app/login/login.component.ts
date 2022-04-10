import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name="satwik";
  constructor() { }

  ngOnInit(): void {
  }
  showData($event: any){
    if($event){
      console.log('button was clicked')
      console.log($event)
    }
  }
}

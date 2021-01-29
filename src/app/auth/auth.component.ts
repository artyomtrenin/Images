import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  authenticate(): void{
    sessionStorage.setItem('authenticated', 'true');
    console.log(sessionStorage.getItem('authenticated'));
  }

  checkAuth(): boolean{
    if (sessionStorage.getItem('authenticated') === 'true'){
      return true;
    } else {
      return false;
    }
  }

}

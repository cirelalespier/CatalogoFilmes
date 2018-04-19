import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  filmes: string[] = ["Filme1", "Filme2","Filme3","Filme4"];

  admin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public SenhaIncorreta(){
    this.admin = false;
  }

  public Voltar(){
    this.admin = true;
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  nameforForm:string=this.itemName();
  surnameforForm=this.itemSurname();
  constructor(private router:Router) { }
//  onClick() {
//    this.router.navigate(['/app-root']);
//  }
 itemName(): string {
  return localStorage.getItem('name');
}
itemSurname(): string {
  return localStorage.getItem('surname');
}
exit(){
 this. router.navigate(['/app-comonpage']); // можно было передать все обьектом и удалять обьектом
 localStorage.removeItem('name');
 localStorage.removeItem('surname');
 localStorage.removeItem('email');
 localStorage.removeItem('password');
}
  ngOnInit() {
  }

}

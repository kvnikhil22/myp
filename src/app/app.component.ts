import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  regForm:FormGroup | undefined;
  title: any;
  constructor(private fb:FormBuilder){
  this.regForm=this.fb.group({
  'name' : [],
  'age' : [],
  'password' : [],
  'Email' : []

});
// console.log(this.regForm)
 }

 Demo(){
  console.log(this.regForm)
 }
}
//dependency injection
//reactive forms
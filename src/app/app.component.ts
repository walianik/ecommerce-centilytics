import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value=localStorage.getItem('login')
  title = 'ecommerce'
  cart=false
  toggle=false
  check(e:any){
    if(e==true){
      this.toggle=true
    }
  }
  open(e:any){
    console.log(e);
    if(e==true){
      this.cart=true;
    }
  }
  
}

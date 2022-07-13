import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() event=new EventEmitter<boolean>()

  constructor(public counterService:CounterService) { 
  }
  ngOnInit(): void {
    
  }
  cart(){
    console.log('cart');
    let open=true
    this.event.emit(open);
  }
}

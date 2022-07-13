import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  constructor(private dataService:DataServiceService,private counterServ:CounterService) { 
  }

  ngOnInit(): void {
    this.dataService.on().subscribe(data=>{
      this.products=data
      console.log('products',this.products);
    })
    
  }
  deleteITem(element:any,i:number){

    this.counterServ.reduceCounter()
    this.products.splice(i,1)

  }
}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { DataServiceService } from '../services/data-service.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() event=new EventEmitter<[]>()
  constructor(private productService:ProductsService,private counterService:CounterService,private dataService:DataServiceService) { 
  }
  data:any=null;
  products:any=[]

  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }
  modifyCounter(element:any){
  
    this.products.push(element)
    console.log(this.products);
    // this.event.emit(this.products)
 
    this.dataService.emit(this.products)
    return this.counterService.updateCounter()
  }

}

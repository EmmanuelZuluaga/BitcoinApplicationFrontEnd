import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../core/services/rest/rest.service';

@Component({
  selector: 'app-prices-bitcoin',
  templateUrl: './prices-bitcoin.component.html',
  styleUrls: ['./prices-bitcoin.component.scss']
})
export class PricesBitcoinComponent implements OnInit {

  public prices:any=[];
  public stateNetwork:any=false;
  

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPrices();
   
  }

  public fetchPrices(){
    this.restService.get('/bitcoin/').subscribe({
      next: (response:any) => {
        this.prices=response.data;

        this.stateNetwork=true;
      },
      error: (_err: any) => {
        console.log('')
        this.stateNetwork=false;
      },
    })
    setTimeout(() => {
      this.fetchPrices()
     }, 60000);
  }

  public goToDetail(index:any){
  //  window.open('http://localhost:4200/detail-price-bitcoin/2022-07-07', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')
    this.router.navigate(['detail-price-bitcoin/'+this.prices[index].date]);

  
  //  window.open(url, '_blank');
    
  }

  
}

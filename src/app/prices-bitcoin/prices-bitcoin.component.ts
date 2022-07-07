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
        if(response.data.length>0){
          this.prices=response.data;
          this.createBackup(this.prices);
          this.stateNetwork=true;
        }else{
          this.prices=JSON.parse(localStorage.getItem('listPricesBitcoin') || '');
        }
     
      }
    })
    setTimeout(() => {
      this.fetchPrices()
     }, 60000);
  }

  public goToDetail(index:any){
   this.router.navigate(['detail-price-bitcoin/'+this.prices[index].date]);    
  }

  async createBackup(prices: any){
    let listDetail:any=[];
      await prices.forEach((element:any) => {
        this.restService.get('/bitcoin/detail/'+element.date).subscribe({
          next: (response:any) => {
            listDetail.push(response.data)
            localStorage.setItem('listDetailBitcoin', JSON.stringify(listDetail));
          }
        });
      });
      localStorage.setItem('listPricesBitcoin', JSON.stringify(prices));
  }
}

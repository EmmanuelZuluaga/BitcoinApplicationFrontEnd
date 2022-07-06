import { Component, OnInit } from '@angular/core';
import { RestService } from '../core/services/rest/rest.service';

@Component({
  selector: 'app-prices-bitcoin',
  templateUrl: './prices-bitcoin.component.html',
  styleUrls: ['./prices-bitcoin.component.scss']
})
export class PricesBitcoinComponent implements OnInit {

  public prices:any=[];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.fetchPrices();
  }

  public fetchPrices(){
    this.restService.get('/bitcoin/').subscribe({
      next: (response:any) => {
      
        this.prices=response.data;
        console.log(response)
      },
      error: (_err: any) => {
        console.log('')
      },
    })
  }

}

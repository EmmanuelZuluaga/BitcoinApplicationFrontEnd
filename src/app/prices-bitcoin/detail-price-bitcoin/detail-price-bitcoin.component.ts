import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RestService } from 'src/app/core/services/rest/rest.service';

@Component({
  selector: 'app-detail-price-bitcoin',
  templateUrl: './detail-price-bitcoin.component.html',
  styleUrls: ['./detail-price-bitcoin.component.scss']
})
export class DetailPriceBitcoinComponent implements OnInit {

  public detailPrice:any;
  public state:any='loading' 
  public stateNetwork:any=false;

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit(): void {
    this.fetchDetailPrice();
  }


  public fetchDetailPrice(){
    this.route.params.subscribe((params: Params) => {
      let date = params['date'];
      this.restService.get('/bitcoin/detail/'+date).subscribe({
        next: (response:any) => {
          if(response.data.closePriceUSD!=undefined&&
            response.data.closePriceCOP!=undefined&& 
            response.data.closePriceEUR!=undefined){
            this.detailPrice=response.data;
            this.stateNetwork=true
          }else{
          this.findDetail(JSON.parse(localStorage.getItem('listDetailBitcoin') || ''))
          }
          this.state='ok';
        }
      });
    });
    setTimeout(() => {
      this.fetchDetailPrice()
     }, 60000);
  }

  public findDetail(list:any){
    this.route.params.subscribe((params: Params) => {
      let date = params['date'];
      list.filter( (detail:any) => {
          if(detail.date == date){
            this.detailPrice=detail;
           
          }
        
    });
    });
  }



}

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
          if(response.data.closePriceUSD!=undefined){
            this.detailPrice=response.data;
            this.stateNetwork=true
          }else{
            this.stateNetwork=false;
          }
          this.state='ok';
         ;
        },
        error: (_err: any) => {
          console.log('')
          this.state='ok';
          this.stateNetwork=false;
        },
      });
    });
    setTimeout(() => {
      this.fetchDetailPrice()
     }, 60000);
  }
}

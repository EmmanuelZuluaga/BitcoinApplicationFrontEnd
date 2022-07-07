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

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit(): void {
    this.fetchDetailPrice();
  }


  public fetchDetailPrice(){
    this.route.params.subscribe((params: Params) => {
      let date = params['date'];
      this.restService.get('/bitcoin/detail/'+date).subscribe({
        next: (response:any) => {
          this.detailPrice=response.data;
          console.log(this.detailPrice)
          this.state='ok';
        },
        error: (_err: any) => {
          console.log('')
         // this.stateNetwork=false;
        },
      });
    });
  }
}

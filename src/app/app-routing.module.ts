import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPriceBitcoinComponent } from './prices-bitcoin/detail-price-bitcoin/detail-price-bitcoin.component';
import { PricesBitcoinComponent } from './prices-bitcoin/prices-bitcoin.component';

const routes: Routes = [

  {
    path: '',
    component: PricesBitcoinComponent
  },
  {
    path: 'detail-price-bitcoin/:date',
    component: DetailPriceBitcoinComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

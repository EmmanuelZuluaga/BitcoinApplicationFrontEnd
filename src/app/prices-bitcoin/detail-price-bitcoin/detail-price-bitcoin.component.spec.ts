import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPriceBitcoinComponent } from './detail-price-bitcoin.component';

describe('DetailPriceBitcoinComponent', () => {
  let component: DetailPriceBitcoinComponent;
  let fixture: ComponentFixture<DetailPriceBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPriceBitcoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPriceBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

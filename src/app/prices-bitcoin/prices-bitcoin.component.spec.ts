import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesBitcoinComponent } from './prices-bitcoin.component';

describe('PricesBitcoinComponent', () => {
  let component: PricesBitcoinComponent;
  let fixture: ComponentFixture<PricesBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesBitcoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

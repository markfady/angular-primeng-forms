import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentChannelsComponent } from './payment-channels.component';

describe('PaymentChannelsComponent', () => {
  let component: PaymentChannelsComponent;
  let fixture: ComponentFixture<PaymentChannelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentChannelsComponent]
    });
    fixture = TestBed.createComponent(PaymentChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

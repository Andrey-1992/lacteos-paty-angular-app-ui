import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionVsFactoryComponent } from './production-vs-factory.component';

describe('ProductionVsFactoryComponent', () => {
  let component: ProductionVsFactoryComponent;
  let fixture: ComponentFixture<ProductionVsFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionVsFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionVsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

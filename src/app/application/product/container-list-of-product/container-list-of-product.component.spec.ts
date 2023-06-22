import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListOfProductComponent } from './container-list-of-product.component';

describe('ContainerListOfProductComponent', () => {
  let component: ContainerListOfProductComponent;
  let fixture: ComponentFixture<ContainerListOfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListOfProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerListOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

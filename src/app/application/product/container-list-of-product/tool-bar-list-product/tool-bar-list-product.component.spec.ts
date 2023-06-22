import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarListProductComponent } from './tool-bar-list-product.component';

describe('ToolBarListProductComponent', () => {
  let component: ToolBarListProductComponent;
  let fixture: ComponentFixture<ToolBarListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarListProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBarListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

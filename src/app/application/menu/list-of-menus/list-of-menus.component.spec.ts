import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMenusComponent } from './list-of-menus.component';

describe('ListOfMenusComponent', () => {
  let component: ListOfMenusComponent;
  let fixture: ComponentFixture<ListOfMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
